% Code to examine reward rates for each patch as a function of free or forced choice conditions (follow up on Figure 3)
% in Hall-McMaster, Dayan & Schuck: Control over patch encounters changes foraging behaviour
% Max Planck Institute for Human Development, December 2020


%To run this, ensure your current directory is the Fig3 folder.
clear all
close all

%% setup

% set paths
mydir    = pwd;
if ispc
    folders   = strfind(mydir,'\');
else
    folders   = strfind(mydir,'/');
end
path = mydir(1:folders(end-1));
fs = filesep;
datapath = [path fs 'data'];
toolpath = [path fs 'toolbox' fs 'plot'];
savepath = pwd;
addpath(datapath);
addpath(toolpath);

% create vectors to store condition data
forced_slowPatRew=[];
forced_midPatRew=[];
forced_fastPatRew=[];
free_slowPatRew=[];
free_midPatRew=[];
free_fastPatRew=[];

for_slw_expl=[];
for_mid_expl=[];
for_fst_expl=[];
fre_slw_expl=[];
fre_mid_expl=[];
fre_fst_expl=[];

% define participants to analyse. Exclude participants rejected during
% preprocessing
sublist=[1:70];
exclude=[12 33 43 44 50 54 58 61 68 70];

sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

% give reward rate as a function of all actions (selection, exploit, leave) if set to 1 or
% just exploit actions if set to 0
do_all_actions=0;

%% Get data for analysis

for isub=1:nsubs
    
    sub=sublist(isub);
    
    % load file
    dat=[];
    dat=load(['sub' num2str(sub) '_data.mat']);
    dat=dat.dat;
    
    % get data for the forced choice condition (cond=1) or the free choice
    % condition (cond=2)
    for cond=1:2
        idx=[];
        if do_all_actions
            idx=find(dat.blk_type==cond & (strcmp(dat.exploit_phase_key,'space') | (strcmp(dat.exploit_phase_key,'s') ...
                | strcmp(dat.patch_selection_key,'f') | strcmp(dat.patch_selection_key,'j') | strcmp(dat.patch_selection_key,'k'))));
        else
            idx=find(dat.blk_type==cond & strcmp(dat.exploit_phase_key,'space'));
        end
        
        idx_leave=[];
        idx_leave=find(dat.blk_type==cond & strcmp(dat.exploit_phase_key,'s'));
        dat.actual_rew_gain(idx_leave)=0; % no points actually gained in block when leaving
        
        sl_idx=[];  sl_idx=find(dat.currentPatchReplenishRate(idx)==0.05);
        mid_idx=[]; mid_idx=find(dat.currentPatchReplenishRate(idx)==0.10);
        fst_idx=[]; fst_idx=find(dat.currentPatchReplenishRate(idx)==0.15);
        
        switch cond
            case 1
                forced_slowPatRew=vertcat(forced_slowPatRew,sum(dat.actual_rew_gain(idx(sl_idx))));
                forced_midPatRew=vertcat(forced_midPatRew,sum(dat.actual_rew_gain(idx(mid_idx))));
                forced_fastPatRew=vertcat(forced_fastPatRew,sum(dat.actual_rew_gain(idx(fst_idx))));
                
                for_slw_expl=vertcat(for_slw_expl,length(sl_idx));
                for_mid_expl=vertcat(for_mid_expl,length(mid_idx));
                for_fst_expl=vertcat(for_fst_expl,length(fst_idx));
                
            case 2
                free_slowPatRew=vertcat(free_slowPatRew,sum(dat.actual_rew_gain(idx(sl_idx))));
                free_midPatRew=vertcat(free_midPatRew,sum(dat.actual_rew_gain(idx(mid_idx))));
                free_fastPatRew=vertcat(free_fastPatRew,sum(dat.actual_rew_gain(idx(fst_idx))));
                
                fre_slw_expl=vertcat(fre_slw_expl,length(sl_idx));
                fre_mid_expl=vertcat(fre_mid_expl,length(mid_idx));
                fre_fst_expl=vertcat(fre_fst_expl,length(fst_idx));
        end
    end
    
end

%% Plot the data and perform statistical tests

% generate figure
settings.disp_subdat=1; % do you want to plot individual participant points on the bar charts?
if settings.disp_subdat
    settings.setylim=[0 100;0 100; 0 100]; % how high do you want the Y axis in each subplot (with participant points)?
else
    settings.setylim=[0 80;0 80;0 80];     % how high do you want the Y axis in each subplot (without participant points)?
end
settings.exploratory=1; % is this analysis exploratory?
settings.numtests=3;    % how many exploratory tests do you want to correct over?

[h(1),for_slw_M,fre_slw_M,for_slw_SD,fre_slw_SD,p_slw,df_slw,tstat_slw]=create_barplot(forced_slowPatRew./for_slw_expl,free_slowPatRew./fre_slw_expl,1,settings,'Reward Rate for Slow Replenishing Option');
[h(2),for_mid_M,fre_mid_M,for_mid_SD,fre_mid_SD,p_mid,df_mid,tstat_mid]=create_barplot(forced_midPatRew./for_mid_expl,free_midPatRew./fre_mid_expl,2,settings,'Reward Rate for Medium Replenishing Option');
[h(3),for_fst_M,fre_fst_M,for_fst_SD,fre_fst_SD,p_fst,df_fst,tstat_fst]=create_barplot(forced_fastPatRew./for_fst_expl,free_fastPatRew./fre_fst_expl,3,settings,'Reward Rate for Fast Replenishing Option');

% store stats info in a structure
% means
stats.slw.forced.mean=for_slw_M; stats.slw.free.mean=fre_slw_M;
stats.mid.forced.mean=for_mid_M; stats.mid.free.mean=fre_mid_M;
stats.fst.forced.mean=for_fst_M; stats.fst.free.mean=fre_fst_M;

% SDs
stats.slw.forced.SD=for_slw_SD; stats.slw.free.SD=fre_slw_SD;
stats.mid.forced.SD=for_mid_SD; stats.mid.free.SD=fre_mid_SD;
stats.fst.forced.SD=for_fst_SD; stats.fst.free.SD=fre_fst_SD;

% tests (corrected)
stats.slw.forcedVfree.p=p_slw; stats.slw.forcedVfree.df=df_slw; stats.slw.forcedVfree.tstat=tstat_slw;
stats.mid.forcedVfree.p=p_mid; stats.mid.forcedVfree.df=df_mid; stats.mid.forcedVfree.tstat=tstat_mid;
stats.fst.forcedVfree.p=p_fst; stats.fst.forcedVfree.df=df_fst; stats.fst.forcedVfree.tstat=tstat_fst;

% set analysis name for saving
if do_all_actions
    analysisname='Fig3_RewRates_AllActs_Exploratory';
else
    analysisname='Fig3_RewRates_ExplActs_Exploratory';
end

% save stats?
save_stats=1;
if save_stats
    statfolder = [savepath '/results/stats']; if ~exist(statfolder,'dir'); mkdir(statfolder); end
    statfname  = sprintf('%s/%s_stats',statfolder,analysisname);
    statfname  = sprintf('%s_%s',statfname,datestr(now,'yyyymmdd-HHMM'));
    save([statfname '.mat'],'stats');
end

% save figure?
do_print=1;
if do_print
    figpath =  [savepath '/figures']; if ~exist(figpath,'dir'), mkdir(figpath); end
    fname = sprintf('%s/%s',figpath,analysisname);
    fname = sprintf('%s_%s',fname,datestr(now,'yyyymmdd-HHMM'));
    print(gcf,'-dpng',fname);
    print(gcf,'-dpdf','-painters',fname);
end
