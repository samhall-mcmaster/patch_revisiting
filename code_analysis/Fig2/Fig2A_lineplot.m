% Code to reproduce normalised visitation rates as a function of free or forced choice conditions (Figure 2A_lineplot)
% in Hall-McMaster, Dayan & Schuck: Control over patch encounters changes foraging behaviour
% Max Planck Institute for Human Development, December 2020


%To run this, ensure your current directory is the Fig2 folder.
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
forced_slowPatVisit=[];
forced_midPatVisit=[];
forced_fastPatVisit=[];
free_slowPatVisit=[];
free_midPatVisit=[];
free_fastPatVisit=[];
forced_sel_count=[];
free_sel_count=[];

% define participants to analyse. Exclude participants rejected during
% preprocessing
sublist=[1:70];
exclude=[12 33 43 44 50 54 58 61 68 70];

sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

%% Get data to test prediction

%Prediction 1. Participants will visit high value patches more and low value
%patches less in free compared with forced choice conditions

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
        idx=find(dat.blk_type==cond & (strcmp(dat.patch_selection_key,'f') ...
            | strcmp(dat.patch_selection_key,'j') | strcmp(dat.patch_selection_key,'k')));
        
        switch cond
            case 1
                forced_slowPatVisit=vertcat(forced_slowPatVisit,length(find(dat.currentPatchReplenishRate(idx)==0.05)));
                forced_midPatVisit=vertcat(forced_midPatVisit,length(find(dat.currentPatchReplenishRate(idx)==0.10)));
                forced_fastPatVisit=vertcat(forced_fastPatVisit,length(find(dat.currentPatchReplenishRate(idx)==0.15)));
                forced_sel_count=vertcat(forced_sel_count,length(idx));
                
            case 2
                free_slowPatVisit=vertcat(free_slowPatVisit,length(find(dat.currentPatchReplenishRate(idx)==0.05)));
                free_midPatVisit=vertcat(free_midPatVisit,length(find(dat.currentPatchReplenishRate(idx)==0.10)));
                free_fastPatVisit=vertcat(free_fastPatVisit,length(find(dat.currentPatchReplenishRate(idx)==0.15)));
                free_sel_count=vertcat(free_sel_count,length(idx));
        end
    end
    
end

%% Plot the data and perform statistical tests

% organise data 
dat_plt(:,1)=forced_slowPatVisit./forced_sel_count; dat_plt(:,4)=free_slowPatVisit./free_sel_count;
dat_plt(:,2)=forced_midPatVisit./forced_sel_count; dat_plt(:,5)=free_midPatVisit./free_sel_count;
dat_plt(:,3)=forced_fastPatVisit./forced_sel_count; dat_plt(:,6)=free_fastPatVisit./free_sel_count;

% data as csv file to plot simplex in a different script
T=array2table(dat_plt);
T.Properties.VariableNames = {'slow_patch_forced_choice','medium_patch_forced_choice','fast_patch_forced_choice', ...
                              'slow_patch_free_choice','medium_patch_free_choice','fast_patch_free_choice'};
writetable(T,'proportion_visits.csv');

% generate figure
settings.disp_subdat=1; % do you want to plot individual participant points on the bar charts?
settings.setylim=[0.2 0.5;0.25 0.40]; % how high do you want the Y axis in each subplot?
settings.exploratory=0; % is this analysis exploratory?
settings.numtests=3;    % how many exploratory tests do you want to correct over?
[h,dat_means, dat_SDs, stat_out]=create_lineplot(dat_plt,settings,'Proportion of Patch Visits');

% store stats info in a structure
% means
stats.slw.forced.mean=dat_means(1,:); stats.slw.free.mean=dat_means(4,:);
stats.mid.forced.mean=dat_means(2,:); stats.mid.free.mean=dat_means(5,:);
stats.fst.forced.mean=dat_means(3,:); stats.fst.free.mean=dat_means(6,:);

% SDs
stats.slw.forced.SD=dat_SDs(1,:); stats.slw.free.SD=dat_SDs(4,:);
stats.mid.forced.SD=dat_SDs(2,:); stats.mid.free.SD=dat_SDs(5,:);
stats.fst.forced.SD=dat_SDs(3,:); stats.fst.free.SD=dat_SDs(6,:);

% tests
stats.slw.forcedVfree.p=stat_out.p(1); stats.slw.forcedVfree.df=stat_out.df(1); stats.slw.forcedVfree.tstat=stat_out.tstat(1);
stats.mid.forcedVfree.p=stat_out.p(2); stats.mid.forcedVfree.df=stat_out.df(2); stats.mid.forcedVfree.tstat=stat_out.tstat(2);
stats.fst.forcedVfree.p=stat_out.p(3); stats.fst.forcedVfree.df=stat_out.df(3); stats.fst.forcedVfree.tstat=stat_out.tstat(3);

% check results with logit transformed t-tests
transf_slw_for = log(dat_plt(:,1)./dat_plt(:,2)); transf_slw_fre = log(dat_plt(:,4)./dat_plt(:,5));
transf_fst_for = log(dat_plt(:,3)./dat_plt(:,2)); transf_fst_fre = log(dat_plt(:,6)./dat_plt(:,5));
[h,p_logit_slw,ci,stats_logit_slw]=ttest(transf_slw_for,transf_slw_fre);
[h,p_logit_fst,ci,stats_logit_fst]=ttest(transf_fst_for,transf_fst_fre);
p_logit_slw
p_logit_fst


% set analysis name for saving
analysisname='Fig2A_propVisits_line';

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
