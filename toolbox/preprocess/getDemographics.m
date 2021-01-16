% Code to get age and gender information across participants

%To run this, ensure your current directory is the preprocess folder.
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

% create vectors to store data
ages=[];
genders=[];

% define participants to analyse. Exclude participants rejected in
% getRejectedSubs.m
sublist=[1:70];
exclude=[12 33 43 44 50 54 58 61 68 70];
sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

% loop over participants
for isub=1:nsubs
    sub=sublist(isub);
    
    % load file
    dat=[];
    dat=load(['sub' num2str(sub) '_data.mat']);
    dat=dat.dat;
    
    % get age
    ages=vertcat(ages,max(dat.age));
    
    % get gender (0=female, 1=male, 2=gender diverse)
    genders=vertcat(genders,max(dat.gender));
end

stats.ages.data=ages;
stats.ages.mean=mean(ages);
stats.ages.min=min(ages);
stats.ages.max=max(ages);

stats.genders.data=genders;
stats.genders.female=length(find(genders==0));
stats.genders.male=length(find(genders==1));
stats.genders.gender_diverse=length(find(genders==2));

% set analysis name for saving
analysisname='demographics';

% save stats?
save_stats=1;
if save_stats
    statfolder = [savepath '/results/stats']; if ~exist(statfolder,'dir'); mkdir(statfolder); end
    statfname  = sprintf('%s/%s_stats',statfolder,analysisname);
    statfname  = sprintf('%s_%s',statfname,datestr(now,'yyyymmdd-HHMM'));
    save([statfname '.mat'],'stats');
end
