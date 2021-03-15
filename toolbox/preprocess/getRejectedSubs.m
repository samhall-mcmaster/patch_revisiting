% Code to check participants for outliers

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
points_earned=[];

% define participant list
sublist=[1:70];
nsubs=length(sublist);

% loop over participants
for isub=1:nsubs
    sub=sublist(isub);
    
    % load file
    dat=[];
    dat=load(['sub' num2str(sub) '_data.mat']);
    dat=dat.dat;
    
    % get points earned
    points_earned=vertcat(points_earned,max(dat.total_points)); 
end

stats.points.total=points_earned;
stats.points.mean=mean(points_earned);
stats.points.median=median(points_earned);
stats.rejected.subID=sublist(isoutlier(points_earned));
stats.rejected.points=points_earned(isoutlier(points_earned));

% create a histogram showing points_earned
% this can be used to check whether outliers identified are distinct from the main distribution 
figure
histogram(points_earned);
xlabel('Total Points Earned');
ylabel('Number of Partcipants');
set(gca,'FontSize',16);
box off

% set analysis name for stats saving
analysisname='rejectedSubs';

% save stats?
save_stats=1;
if save_stats
    statfolder = [savepath '/results/stats']; if ~exist(statfolder,'dir'); mkdir(statfolder); end
    statfname  = sprintf('%s/%s_stats',statfolder,analysisname);
    statfname  = sprintf('%s_%s',statfname,datestr(now,'yyyymmdd-HHMM'));
    save([statfname '.mat'],'stats');
end

% set analysis name for histogram saving
analysisname='pointsEarned';

% save figure?
save_figure=1;
if save_figure
   figfolder = [savepath '/figures']; if ~exist(figfolder,'dir'); mkdir(figfolder); end
   fname = sprintf('%s/%s_histogram',figfolder,analysisname);
   fname  = sprintf('%s_%s',fname,datestr(now,'yyyymmdd-HHMM'));
   print(gcf,'-dpng',fname);
end
