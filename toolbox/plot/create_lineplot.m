% Function used to generate a lineplot figure
% the function takes in data (e.g. dat_plt), which has rows for each participant and columns for conditions,
% -settings.disp_subdat=1 will plot individual participant points on top of each condition mean
% -settings.exploratory is flag for whether the analysis is exploratory
% -settings.numtests is how many tests you want to correct over, if settings.exploratory=1
% -settings.setylim controls the height of the way axis
% -ylab is a string that you want to use as the yaxis label
% -settings can include option default fields to change the xlabel (settings.xaxislabel),
%  xticks (settings.xticks), the legend location (settings.legendloc) or
%  remove the legend (settings.dolegend)
function [h, dat_means, dat_SDs, stat_out] = create_barplot(dat_plt,settings,ylab)

% create figure
figure

% establish the number of conditions
nconds=size(dat_plt,2);

% compute summary stats for plotting
for i=1:nconds
    dat_means(i,1)=squeeze(mean(dat_plt(:,i)));
    dat_SDs(i,1)=squeeze(std(dat_plt(:,i)));
    dat_sems(i,1)=dat_SDs(i,1)/sqrt(size(dat_plt(:,i),1));
end

% perform statistical test between free and forced conditions for each
% patch
for i=1:nconds/2
    if nconds<6
        modifier=0;
    else 
        modifier=3;
    end
    
    [h,p,ci,stats]=ttest(dat_plt(:,i),dat_plt(:,i+modifier));
    if settings.exploratory
    p=p*settings.numtests;
    end
    stat_out.p(i,1)=p;
    stat_out.df(i,1)=stats.df;
    stat_out.tstat(i,1)=stats.tstat;
end

% set colours
markercol=[0,0,0];
col_forced=[1 140/255 0];
col_free=[50/255 195/255 70/255];

% create offset if plotting individuals points
if settings.disp_subdat
    offset_val=0.05;
else
    offset_val=0;
end

% plot individual participant points if desired
if settings.disp_subdat
    for i=1:nconds
        if i<=nconds/2
            offset_amt=-offset_val;
            input_col=col_forced;
            option_num=i;
        else
            offset_amt=offset_val;
            input_col=col_free;
            option_num=i-nconds/2;
        end
        h(3)=plot(repelem(option_num+offset_amt,size(dat_plt,1),1),dat_plt(:,i),'o','color',input_col);
        hold on
    end
else
    % if not plotting individual points, add errobars
    h(4)=errorbar([1:nconds/2],[dat_means(1:nconds/2,1)],[dat_sems(1:nconds/2,1)],'.','color','k'); hold on
    h(5)=errorbar([1:nconds/2],[dat_means((nconds/2)+1:end,1)],[dat_sems((nconds/2)+1:end,1)],'.','color','k');
end

% create main plot
h(1)=plot([1:nconds/2]-offset_val,[dat_means(1:nconds/2,1)],'-o','Color',col_forced,'MarkerEdgeColor',markercol,'MarkerFaceColor',markercol,'LineWidth',2);
hold on
h(2)=plot([1:nconds/2]+offset_val,[dat_means((nconds/2)+1:end,1)],'-o','Color',col_free,'MarkerEdgeColor',markercol,'MarkerFaceColor',markercol,'LineWidth',2);

% set axis labels
ylabel(ylab);
xlabel('Patch Replenishment Rate');
xticklabels({'Slow','Medium','Fast'});
xticks([1:3]);

% set axis limits
if settings.disp_subdat
    ly=settings.setylim(1,:);
    ylim(ly);
else
    ly=settings.setylim(2,:);
    ylim(ly);
end
xlim([0.5 3.5])

% add legend
legend([h(1:2)],'Forced Choice', 'Free Choice');
legend('boxoff')

% override certain default features if given as input
if isfield(settings,'xaxislabel')
    xlabel(settings.xaxislabel);
end

if isfield(settings,'xticks')
xticklabels({cell2mat(settings.xticks(1)),cell2mat(settings.xticks(2)),cell2mat(settings.xticks(3))});
xlabel(cell2mat(settings.xticks(4)));
end

if isfield(settings,'legendloc')
legend('location',settings.legendloc);
end

if isfield(settings,'dolegend') && settings.dolegend==0
b = gca; legend(b,'off');
end

% fine tune plot settings
set (gca, 'box' , 'off');
ax = gca;
ax.FontSize = 14;
end