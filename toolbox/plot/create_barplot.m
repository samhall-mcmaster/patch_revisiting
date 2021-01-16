% Function used to generate the barplot figure, wtith multiple subplots
% the function takes in condition 1 data (C1) and condition 2 data (C2),
% -subplt is used to determine which subplot is being plotted,
% -settings.disp_subdat can plot individual participant points on top of each bar
% -settings.exploratory is flag for whether the analysis is exploratory
% -settings.numtests is how many tests you want to correct over, if
% settings.exploratory=1
% -settings.setylim controls the height of the way axis
% -ylab is a string that you want to use as the yaxis label 
function [h, C1_mean, C2_mean, C1_SD, C2_SD, p, df,tstat] = create_barplot(C1,C2,subplt,settings,ylab)

% define subplot
subplot(1,3,subplt)

% compute summary stats for plotting
C1_mean=squeeze(mean(C1));
C2_mean=squeeze(mean(C2));
C1_SD=std(C1);
C2_SD=std(C2);
C1_sem=C1_SD/sqrt(size(C1,1));
C2_sem=C2_SD/sqrt(size(C2,1));

% perform statistical test
[h,p,ci,stats]=ttest(C1,C2);
df=stats.df;
tstat=stats.tstat;

% create plot
h=bar([1,2],[C1_mean, C2_mean],'LineWidth',2);
h.FaceColor = 'flat';

% set bar colours
h.CData(2,:) = [50/255 195/255 70/255];
h.CData(1,:) = [1 140/255 0];
% set bar colours
colB = [50/255 195/255 70/255];
colA = [1 140/255 0];

hold on

% plot individual participant points if desired
if settings.disp_subdat
    col=[0 0 0];
    plot(repelem(1,size(C1,1),1),C1,'o','color',col); plot(repelem(2,size(C2,1),2),C2,'o','color',col);
else
% if not plotting individual points, add errobars
    errorbar([1,2],[C1_mean, C2_mean],[C1_sem, C2_sem],'.','color','k');   
end
ylim(settings.setylim(subplt,:));

% add significance bar if appropriate
if settings.exploratory
    p=p*settings.numtests;
end

if p<0.05
yl=ylim;
plot([1, 2],[yl(2)-(yl(2)*0.05), yl(2)-(yl(2)*0.05)],'color','k','LineWidth',2);
addtxt='*';
offset=0.05;
text(1.5-offset,yl(2)-(yl(2)*0.045),addtxt,'FontSize',14);
end

% set axis labels
ylabel(ylab,'fontsize',14);
xlabel('Choice Condition','fontsize',14);
xticklabels({'Forced','Free'});

% fine tune plot settings
set (gca, 'box' , 'off');
ax = gca;
if subplt==1
    title('A                                                  ','fontsize',16);
elseif subplt==3
    title('B                                                  ','fontsize',16);
end

end