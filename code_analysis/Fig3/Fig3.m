% Code to reproduce reward rates as a function of free or forced choice conditions (Figure 3)
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
forced_rew=[];
free_rew=[];
forced_exploit_actions=[];
free_exploit_actions=[];


% define participants to analyse. Exclude participants rejected during
% preprocessing
sublist=[1:70];
exclude=[12 33 43 44 50 54 58 61 68 70];

sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

%% Get data to test prediction

%Prediction 2. Participants will earn more reward overall and increase the
%average reward rate under free choice conditions

for isub=1:nsubs
    
    sub=sublist(isub);
    
    % load file
    dat=[];
    dat=load(['sub' num2str(sub) '_data.mat']);
    dat=dat.dat;
    
    % get data for the forced choice condition (cond=1) or the free choice
    % condition (cond=2)
    for_rew=0; for_exploit=0;
    fre_rew=0; fre_exploit=0;
    for i_blk=1:4
        idx=[];
        idx=find(dat.blk_number==i_blk);
        actidx=[];
        actidx=find(dat.blk_number==i_blk & (strcmp(dat.exploit_phase_key,'space')));
        cond=dat.blk_type(idx(end));
        
        switch cond
            case 1
                for_rew=for_rew+dat.blk_points(idx(end));
                for_exploit=for_exploit+length(actidx);
            case 2
                fre_rew=fre_rew+dat.blk_points(idx(end));
                fre_exploit=fre_exploit+length(actidx);
        end
    end
    
    forced_rew=vertcat(forced_rew,for_rew);
    free_rew=vertcat(free_rew,fre_rew);
    forced_exploit_actions=vertcat(forced_exploit_actions,for_exploit);
    free_exploit_actions=vertcat(free_exploit_actions,fre_exploit);
    
end

%% Plot the data and perform statistical tests

% generate figure
settings.disp_subdat=1; % do you want to plot individual participant points on the bar charts?
if settings.disp_subdat
    settings.setylim=[0 100; 0 100; 0 100]; % how high do you want the Y axis in each subplot (with participant points)?
else
    settings.setylim=[0 80; 0 80; 0 80];   % how high do you want the Y axis in each subplot (without participant points)?
end
settings.exploratory=0; % is this analysis exploratory?
settings.numtests=3;    % how many exploratory tests do you want to correct over?


[h(1),for_rewExpl_M,fre_rewExpl_M,for_rewExpl_SD,fre_rewExpl_SD,p_rewExpl,df_rewExpl,tstat_rewExpl]=create_barplot(forced_rew./forced_exploit_actions,free_rew./free_exploit_actions,1,settings,'Reward Rate (Exploit Actions)');
[h(2),for_rewRate_M,fre_rewRate_M,for_rewRate_SD,fre_rewRate_SD,p_rewRate,df_rewRate,tstat_rewRate]=create_barplot(forced_rew/400,free_rew/400,3,settings,'Reward Rate (All Actions)');

% store stats info in a structure
% means
stats.rewExpl.forced.mean=for_rewExpl_M; stats.rewExpl.free.mean=fre_rewExpl_M;
stats.rewRate.forced.mean=for_rewRate_M; stats.rewRate.free.mean=fre_rewRate_M;

% SDs
stats.rewExpl.forced.SD=for_rewExpl_SD; stats.rewExpl.free.SD=fre_rewExpl_SD;
stats.rewRate.forced.SD=for_rewRate_SD; stats.rewRate.free.SD=fre_rewRate_SD;

% tests
stats.rewExpl.forcedVfree.p=p_rewExpl; stats.rewExpl.forcedVfree.df=df_rewExpl; stats.rewExpl.forcedVfree.tstat=tstat_rewExpl;
stats.rewRate.forcedVfree.p=p_rewRate; stats.rewRate.forcedVfree.df=df_rewRate; stats.rewRate.forcedVfree.tstat=tstat_rewRate;

% set analysis name for saving
analysisname='Fig3';

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
