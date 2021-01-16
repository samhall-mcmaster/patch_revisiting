% Code to run models, to test whether leave decisions are made based on global or local reward information
% in Hall-McMaster, Dayan & Schuck: Control over patch encounters changes foraging behaviour
% Max Planck Institute for Human Development, December 2020


% Note that the calculation of BIC scores and Bayes Factors are handled by computeStats.m
% To run this, ensure your current directory is the Fig7 folder.

%% setup
clear all
close all

% set paths
mydir    = pwd;
if ispc
    folders   = strfind(mydir,'\');
else
    folders   = strfind(mydir,'/');
end
path = mydir(1:folders(end-1));
fs = filesep;
datapath = [path 'data'];
toolpath = [path fs 'toolbox' fs 'plot'];
modelpath = [pwd fs 'models'];
savepath = pwd;
addpath(datapath);
addpath(toolpath);
addpath(modelpath);

% define participant information
sublist=[1:70];
exclude=[12 33 43 44 50 54 58 61 68 70];
sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

% define block information
n_blks=4;

% define model fit settings
algopt = optimset('fmincon');
algopt = optimset(algopt,'Algorithm','interior-point','Display','off');

% initialise parameters for different models
% global reward rate model (MVT)
startparam_global = [0 0.1 0.5 0.5];
minparam_global =   [-50 0 0 0];
maxparam_global =   [50 2 1 1];
cond_global=1;      %1 = forced choice, 2 = free choice
trials_global=1;    %1 = all trials, 2 = first half of each block, 3 = second half of each block

% local reward model based on current reward rate of best alternative (local_B)
startparam_local = [0 0.1 0.5 0.5];
minparam_local  =  [-50 0 0 0.0];
maxparam_local  =  [50 3 1 1];
cond_local=1;      
trials_local=1;   

% which model do you want to run?
test_model=1; %1=global, 2=local

%% loop over participants
for isub=1:nsubs
    sub=sublist(isub);
    
    % load data
    load([datapath fs 'sub' num2str(sub) '_data.mat']);
   
    tidx = find(contains(dat.exploit_phase_key, ["s"]) | contains(dat.exploit_phase_key, "space")); 
    dat = dat(tidx, :);   
    x = strcat(dat.exploit_phase_key);  
    x = strrep(x, '0', ''); 
    x = strrep(x, 'N/A', '');  
    x = strcmp(x, 'space') + strcmp(x,'s')*2;
    dat.choices = x; 

    % if testing global reward model
    if test_model==1  
       fprintf(['Fitting model 1, sub' num2str(sublist(isub)) ', forced choice condition ... ']);
       cond_global=1;
       [pvec fval] = fmincon(@(P) Global_model(P,dat,cond_global,trials_global,sub),startparam_global,[],[],[],[],minparam_global,maxparam_global,[],algopt);
       sub_scores_forced(isub,:)=[pvec fval]; 
       [LL, trld] = Global_model(pvec,dat,cond_global,trials_global,sub); 
       cps = grpstats(trld.cchoice_prob, trld.cchoices);
       fprintf('LL %05.1f | mp(stay) %3.2f mp(leave) %3.2f | p(leave) %3.2f \n', LL, cps(1), cps(2), mean(trld.cchoices==2));
       
       
       fprintf(['Fitting model 1, sub' num2str(sublist(isub)) ', free   choice condition ... ']);
       cond_global=2;
       [pvec fval] = fmincon(@(P) Global_model(P,dat,cond_global,trials_global,sub),startparam_global,[],[],[],[],minparam_global,maxparam_global,[],algopt);
       sub_scores_free(isub,:)=[pvec fval];
       [LL, trld] = Global_model(pvec,dat,cond_global,trials_global,sub); 
       cps = grpstats(trld.cchoice_prob, trld.cchoices);
       fprintf('LL %05.1f | mp(stay) %3.2f mp(leave) %3.2f | p(leave) %3.2f \n', LL, cps(1), cps(2), mean(trld.cchoices==2));
    end
    
    % if testing local model
    if test_model==2
       fprintf(['Fitting model 3, sub' num2str(sublist(isub)) ', forced choice condition ... ']);
       cond_local=1;  
       [pvec fval] = fmincon(@(P) LocalRRs_model(P,dat,cond_local,trials_local,sub),startparam_local,[],[],[],[],minparam_local,maxparam_local,[],algopt);
       sub_scores_forced(isub,:)=[pvec fval];
       [LL, trld] = LocalRRs_model(pvec, dat, cond_local, trials_local, sub); 
       cps = grpstats(trld.cchoice_prob, trld.cchoices);
       fprintf('LL %05.1f | mp(stay) %3.2f mp(leave) %3.2f | p(leave) %3.2f \n', LL, cps(1), cps(2), mean(trld.cchoices==2));
       
       fprintf(['Fitting model 3, sub' num2str(sublist(isub)) ', free   choice condition ... ']);
       cond_local=2;
       [pvec fval] = fmincon(@(P) LocalRRs_model(P,dat,cond_local,trials_local,sub),startparam_local,[],[],[],[],minparam_local,maxparam_local,[],algopt);
       sub_scores_free(isub,:)=[pvec fval];
       [LL, trld] = LocalRRs_model(pvec, dat, cond_local, trials_local, sub); 
       cps = grpstats(trld.cchoice_prob, trld.cchoices);
       fprintf('LL %05.1f | mp(stay) %3.2f mp(leave) %3.2f | p(leave) %3.2f \n', LL, cps(1), cps(2), mean(trld.cchoices==2));
    end
end


%% save model fits
if test_model==1
   resultsfolder= ['results' fs 'paramFits_global' fs]; if ~exist(resultsfolder,'dir'); mkdir(resultsfolder); end
   save([resultsfolder 'global_forced_fits.mat'],'sub_scores_forced');
   save([resultsfolder 'global_free_fits.mat'],'sub_scores_free');
elseif test_model==3
   resultsfolder= ['results' fs 'paramFits_local' fs]; if ~exist(resultsfolder,'dir'); mkdir(resultsfolder); end
   save([resultsfolder 'localRRs_forced_fits.mat'],'sub_scores_forced');
   save([resultsfolder 'localRRs_free_fits.mat'],'sub_scores_free');
end




