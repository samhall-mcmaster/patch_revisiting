% Code to reproduce decisions to select best alternative patch (reward rate) as a function of free or forced choice conditions (follow up on Figure 2B)
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
    %for loop_trls=5:size(dat,1)   
    %end
    
    for cond=1:2
        idx=[];
        %idx=find(dat.blk_type==cond);
        idx=find(dat.blk_type==cond & strcmp(dat.exploit_phase_key,'s'));
        %idx=find(dat.blk_number==cond);
        %idx=find(dat.blk_number==cond & strcmp(dat.exploit_phase_key,'s'));
        
        c=0;
        t=[];
        for itrl=1:size(idx,1)
           % get current patch
           c=c+1;
           t(c,1)=dat.currentPatchReplenishRate(idx(itrl));
           
           % look for the next patch
           for m=1:20
               if (itrl+m)>size(idx,1)
                   break
               end
           if dat.currentPatchReplenishRate(idx(itrl)+m)~=t(c,1) ...
              & ismember(dat.currentPatchReplenishRate(idx(itrl)+m), [0.0500,0.1000,0.1500])==1
               
              t(c,2)=dat.currentPatchReplenishRate(idx(itrl)+m);
              break
           end
               
           end
        end
        
        if t(end,2)==0 % if final choice not recorded due to block end
            t(end,:)=[];
        end
        
        y=find(t(:,2)==0);
        t(y,:)=[];
        
        % count up proportion for each patch
        sl_prop = length(find(t(:,1)==0.05 & t(:,2)==0.15)) / length(find(t(:,1)==0.05));
        mid_prop = length(find(t(:,1)==0.10 & t(:,2)==0.15)) / length(find(t(:,1)==0.10));
        fst_prop = length(find(t(:,1)==0.15 & t(:,2)==0.10)) / length(find(t(:,1)==0.15));
        
           
        
        %sl_idx=[];  sl_idx=find(dat.currentPatchReplenishRate(idx)==0.05);
        %mid_idx=[]; mid_idx=find(dat.currentPatchReplenishRate(idx)==0.10);
        %fst_idx=[]; fst_idx=find(dat.currentPatchReplenishRate(idx)==0.15);
        
        switch cond
            case 1
                forced_slowPatRew=vertcat(forced_slowPatRew,sl_prop);
                forced_midPatRew=vertcat(forced_midPatRew,mid_prop);
                forced_fastPatRew=vertcat(forced_fastPatRew,fst_prop);
                
            case 2
                free_slowPatRew=vertcat(free_slowPatRew,sl_prop);
                free_midPatRew=vertcat(free_midPatRew,mid_prop);
                free_fastPatRew=vertcat(free_fastPatRew,fst_prop); 
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
settings.setylim=[0 1;4 7]; % how high do you want the Y axis in each subplot?
settings.exploratory=1; % is this analysis exploratory?
settings.numtests=3;    % how many exploratory tests do you want to correct over?
settings.xaxislabel='Patch Being Left';
settings.dolegend=0;
%settings.legendloc='northoutside';
[h,dat_means, dat_SDs, stat_out]=create_lineplot(dat_plt,settings,'Prop. Choices to Best Alternative (Rate)');

% perform 2x3 repeated measures anova
% note that condition is not really interpretable in this case because mean
% for condition will always be 0.33 as sum will always be 1.
datatable=array2table(dat_plt);
datatable.Properties.VariableNames = {'forced_slw','forced_mid','forced_fst','free_slw','free_mid','free_fst'};
WithinStructure = table([1 1 1 2 2 2]',[1 2 3 1 2 3]','VariableNames',{'ForFre','Replen'});
WithinStructure.ForFre = categorical(WithinStructure.ForFre);
WithinStructure.Replen = categorical(WithinStructure.Replen);
rm = fitrm(datatable, 'forced_slw,forced_mid,forced_fst,free_slw,free_mid,free_fst~1','WithinDesign',WithinStructure);
ranovatable = ranova(rm,'WithinModel','ForFre*Replen');

t=([dat_plt(:,1);dat_plt(:,4)]);
ta=([dat_plt(:,2);dat_plt(:,3)]);
tb=([dat_plt(:,3);dat_plt(:,3)]);

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
stats.anova=ranovatable;

% set analysis name for saving
analysisname='proportion_choose_highest_rewardrate';

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
