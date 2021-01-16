% Code to compute BIC scores and bayes factors for global and local models
% in Hall-McMaster, Dayan & Schuck: Control over patch encounters changes foraging behaviour
% Max Planck Institute for Human Development, December 2020


%To run this, ensure your current directory is the Fig7 folder.
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
datapath = [pwd fs 'results'];
toolpath = [path fs 'toolbox' fs 'plot'];
statpath = [path fs 'toolbox' fs 'stats' fs 'bayesFactor'];
savepath = pwd;
addpath(datapath);
addpath(toolpath);
addpath(statpath);

% define participant information
sublist=[1:70];
exclude=[12 33 43 44 50 54 58 61 68 70];
sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

%% loop over participants
for isub=1:nsubs
    sub=sublist(isub);

% load log likelihood data for each model
% global model
fname= [datapath fs 'results' fs];
t = load(['results/trialwise_data/global_forced/sub' num2str(sub) '_tdat.mat']); 
tf = load(['results/trialwise_data/global_free/sub' num2str(sub) '_tdat.mat']); 
global_forced(isub,1)=sum(log(t.trld.cchoice_prob));
global_free(isub,1)=sum(log(tf.trld.cchoice_prob));

% local model
y = load(['results/trialwise_data/localRRs_forced/sub' num2str(sub) '_tdat.mat']); 
yf = load(['results/trialwise_data/localRRs_free/sub' num2str(sub) '_tdat.mat']); 
localRR_forced(isub,1)=sum(log(y.trld.cchoice_prob));
localRR_free(isub,1)=sum(log(yf.trld.cchoice_prob));

% get number of observations
ntrls(isub,1)=size(t.trld.LL,2);
ntrls(isub,2)=size(y.trld.LL,2);
ntrls(isub,3)=size(tf.trld.LL,2);
ntrls(isub,4)=size(yf.trld.LL,2);

% get correlation between max alternative reward rate and mean over the two alternatives
[rho_forced,p]=corr(y.trld.cmaxAltPatches',y.trld.cmeanAltPatches');
[rho_free,p]=corr(yf.trld.cmaxAltPatches',yf.trld.cmeanAltPatches');
corr_forced(isub,1)=rho_forced;
corr_free(isub,1)=rho_free;
end

% compute BIC scores based on log likelihoods
dat(:,1)=global_forced;
dat(:,2)=localRR_forced;
dat(:,3)=global_free;
dat(:,4)=localRR_free;
for i=1:size(dat,2)
        nparams=4;
[aic(:,i), bic(:,i)] = aicbic(dat(:,i),nparams,ntrls(:,i));
end

% save BIC scores
T=array2table(bic);
T.Properties.VariableNames = {'global_forced','local_forced','global_free','local_free'};
resultsfolder= ['results/stats' fs]; if ~exist(resultsfolder,'dir'); mkdir(resultsfolder); end
writetable(T,[resultsfolder 'BICscores.csv']);

%% calculate BIC differences and bayes factors reported in the paper

% free choice
[stats.free.globalvslocalRRs.BF, p] = bf.ttest(bic(:,3),bic(:,4));
BIC_diff_free=bic(:,3)-bic(:,4);
stats.free.globalvslocalRRs.meanDiff = mean(BIC_diff_free);
stats.free.globalvslocalRRs.numGlobal = length(find(BIC_diff_free<0));
stats.free.globalvslocalRRs.numLocal = length(find(BIC_diff_free>0));
stats.free.global.BICs=bic(:,3);
stats.free.local.BICs=bic(:,4);

% forced choice
[stats.forced.globalvslocalRRs.BF, p] = bf.ttest(bic(:,1),bic(:,2));
BIC_diff_forced=bic(:,1)-bic(:,2);
stats.forced.globalvslocalRRs.meanDiff = mean(BIC_diff_forced);
stats.forced.globalvslocalRRs.numGlobal = length(find(BIC_diff_forced<0));
stats.forced.globalvslocalRRs.numLocal = length(find(BIC_diff_forced>0));
stats.forced.global.BICs=bic(:,1);
stats.forced.local.BICs=bic(:,2);

% local model
[stats.freevsforced.local.BF, p] = bf.ttest(bic(:,2),bic(:,4));
stats.freevsforced.local.meanDiff = mean(bic(:,2)-bic(:,4));

% max local reward rate, mean local reward rate correlation
stats.free.maxvsmean.rho=mean(corr_free);
stats.forced.maxvsmean.rho=mean(corr_forced);

analysisname='stat_results';

% save stats?
save_stats=1;
if save_stats
    statfolder = [savepath '/results/stats']; if ~exist(statfolder,'dir'); mkdir(statfolder); end
    statfname  = sprintf('%s/%s',statfolder,analysisname);
    statfname  = sprintf('%s_%s',statfname,datestr(now,'yyyymmdd-HHMM'));
    save([statfname '.mat'],'stats');
end



