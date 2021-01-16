###### load packages ------
library(ggtern)
library(here)
library(ggplot2)

###### set path and load data ------
# To run this file, open Fig2.Rproj, then open Fig2A_simplex.R 
Dir <- here::here()
DF = data.table::fread(file.path(Dir,'proportion_visits.csv'), header = TRUE)

DF$ID = seq(dim(DF)[1])
DF_forced = DF[,1:3]
DF_forced$cond = 'Forced'
DF_forced$ID = seq(dim(DF_forced)[1])
DF_free = DF[,4:6]
DF_free$cond = 'Free'
DF_free$ID = seq(dim(DF_free)[1])
colnames(DF_forced) <- c("Slow", "Medium", "Fast", "cond", "ID")
colnames(DF_free) <- c("Slow", "Medium", "Fast", "cond", "ID")
DFplot = rbind(DF_forced,DF_free)

###### Calculate mean for plotting ------
DFmean = data.frame(slow = c(mean(DF_forced$Slow),mean(DF_free$Slow)),
                    medium=c(mean(DF_forced$Medium),mean(DF_free$Medium)),
                    fast=c(mean(DF_forced$Fast),mean(DF_free$Fast)),
                    cond=c('Forced','Free'))

###### Set up plot limits and colours ------
min(DFm$Y)
max(DFm$Y)
labFnc <- function(x,digits=2) format(round(unique(x),digits),digits=digits)
breaks=seq(0.3,0.5,0.1)
colFst=rgb(65/255,25/255,138/255)
colMid=rgb(144/255,100/255,227/255)
colSlw=rgb(194/255,170/255,240/255)

###### Probability triangle plot ------
PlotAll = ggtern(DFplot, aes(Slow,Medium,Fast)) +
  geom_point(aes(color=as.factor(cond)),size=1,alpha=0.4, show.legend = FALSE) +
  geom_point(data=DFmean,aes(slow,medium,fast,color=as.factor(cond)),size=3,shape=15, show.legend = TRUE) +
  scale_T_continuous(limits=c(0.2,0.6), breaks = seq(0.3,0.5,0.1), labels=labFnc(breaks)) +
  scale_L_continuous(limits=c(0.2,0.6), breaks = seq(0.3,0.5,0.1), labels=labFnc(breaks)) +
  scale_R_continuous(limits=c(0.2,0.6), breaks = seq(0.3,0.5,0.1), labels=labFnc(breaks)) +
  Tlab(label = "Medium Patch", labelarrow = "Proportion of Visits to Medium") +
  Llab(label = "Slow Patch", labelarrow = "Proportion of Visits to Slow") +
  Rlab(label = "Fast Patch", labelarrow = "Proportion of Visits to Fast") +
  theme_custom(base_size=12, base_family="Helvetica", tern.panel.background = "white", 
               col.T = colMid, col.L = colSlw, col.R = colFst) +
  theme_arrowlong() + theme_showgrid_major() +
  scale_color_manual("Choice condition", labels = c("Forced", "Free"), values = c(rgb(255/255,140/255,0/255), rgb(50/255,195/255,70/255))) +
  theme(tern.axis.title.L = element_text(hjust = 0), tern.axis.title.R = element_text(hjust = 1), 
        tern.panel.grid.major.T = element_line(colour=colMid, size=0.5, linetype = "dashed"), 
        tern.panel.grid.major.L = element_line(colour=colSlw, size=0.5, linetype = "dashed"),
        tern.panel.grid.major.R = element_line(colour=colFst, size=0.5, linetype = "dashed"),
        tern.axis.text = element_text(size=10), legend.key = element_blank(),
        tern.axis.line.T = element_line(size=0.5),
        tern.axis.line.L = element_line(size=0.5),
        tern.axis.line.R = element_line(size=0.5))
PlotAll

###### Save plot to subfolder ------
plotDir <- "figures"
if(!dir.exists(file.path(Dir,plotDir))){dir.create(file.path(Dir,plotDir))}
ggsave(file.path(Dir,plotDir,"Fig2A_propVisits_simplex.png"), dpi = 300)
