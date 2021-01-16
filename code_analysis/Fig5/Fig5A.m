% Code to reproduce reward when arriving at each patch as a function of free or forced choice conditions (Figure 5A)
% in Hall-McMaster, Dayan & Schuck: Control over patch encounters changes foraging behaviour
% Max Planck Institute for Human Development, December 2020


%To run this, ensure your current directory is the Fig5 folder.
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
        idx_temp=[];
        %idx=find(dat.blk_type==cond & strcmp(dat.exploit_phase_key,'s'));
        idx_temp=find(dat.blk_type==cond & (strcmp(dat.patch_selection_key,'f') ...
            | strcmp(dat.patch_selection_key,'j')| strcmp(dat.patch_selection_key,'k')));
        idx=[];
        idx=idx_temp+2;
        idx2=find(strcmp(dat.exploit_phase_key(idx),'space'));
        idx=idx(idx2);
        
        sl_idx=[];  sl_idx=find(dat.currentPatchReplenishRate(idx)==0.05);
        mid_idx=[]; mid_idx=find(dat.currentPatchReplenishRate(idx)==0.10);
        fst_idx=[]; fst_idx=find(dat.currentPatchReplenishRate(idx)==0.15);
        
        switch cond
            case 1
                forced_slowPatRew=vertcat(forced_slowPatRew,mean(dat.actual_rew_gain(idx(sl_idx))));
                forced_midPatRew=vertcat(forced_midPatRew,mean(dat.actual_rew_gain(idx(mid_idx))));
                forced_fastPatRew=vertcat(forced_fastPatRew,mean(dat.actual_rew_gain(idx(fst_idx))));
                
            case 2
                free_slowPatRew=vertcat(free_slowPatRew,mean(dat.actual_rew_gain(idx(sl_idx))));
                free_midPatRew=vertcat(free_midPatRew,mean(dat.actual_rew_gain(idx(mid_idx))));
                free_fastPatRew=vertcat(free_fastPatRew,mean(dat.actual_rew_gain(idx(fst_idx)))); 
        end
    end
    
end

%% Plot the data and perform statistical tests

% organise data 
dat_plt(:,1)=forced_slowPatRew; dat_plt(:,4)=free_slowPatRew;
dat_plt(:,2)=forced_midPatRew;  dat_plt(:,5)=free_midPatRew;
dat_plt(:,3)=forced_fastPatRew; dat_plt(:,6)=free_fastPatRew;

% generate figure
settings.disp_subdat=1; % Do you want to plot individual participant points on the bar charts?
settings.setylim=[50 100;4 7]; % how high do you want the Y axis in each subplot?
settings.exploratory=1; % is this analysis exploratory?
settings.numtests=3;    % how many exploratory tests do you want to correct over?
settings.xaxislabel='Arrival Patch';
settings.legendloc='southeast';
settings.dolegend=1;
[h,dat_means, dat_SDs, stat_out]=create_lineplot(dat_plt,settings,'Reward on Arrival');

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

% perform 2x3 repeated measures anova
datatable=array2table(dat_plt);
datatable.Properties.VariableNames = {'forced_slw','forced_mid','forced_fst','free_slw','free_mid','free_fst'};
WithinStructure = table([1 1 1 2 2 2]',[1 2 3 1 2 3]','VariableNames',{'ForFre','Replen'});
WithinStructure.ForFre = categorical(WithinStructure.ForFre);
WithinStructure.Replen = categorical(WithinStructure.Replen);
rm = fitrm(datatable, 'forced_slw,forced_mid,forced_fst,free_slw,free_mid,free_fst~1','WithinDesign',WithinStructure);
ranovatable = ranova(rm,'WithinModel','ForFre*Replen');
stats.anova.table=ranovatable;

% average over factors to get descriptive stats and store in stats
gp_for=([dat_plt(:,1);dat_plt(:,2);dat_plt(:,3)]);
gp_fre=([dat_plt(:,4);dat_plt(:,5);dat_plt(:,6)]);
gp_slw=mean([dat_plt(:,1) dat_plt(:,4)],2);
gp_mid=mean([dat_plt(:,2) dat_plt(:,5)],2);
gp_fst=mean([dat_plt(:,3) dat_plt(:,6)],2);

stats.anova.descriptives.mean_free=mean(gp_fre);   stats.anova.descriptives.SD_free=std(gp_fre);
stats.anova.descriptives.mean_forced=mean(gp_for); stats.anova.descriptives.SD_forced=std(gp_for);
stats.anova.descriptives.mean_slw=mean(gp_slw);    stats.anova.descriptives.SD_slw=std(gp_slw);
stats.anova.descriptives.mean_mid=mean(gp_mid);    stats.anova.descriptives.SD_mid=std(gp_mid);
stats.anova.descriptives.mean_fst=mean(gp_fst);    stats.anova.descriptives.SD_fst=std(gp_fst);

% set analysis name for saving
analysisname='Fig5A_arrival2Patch';

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
