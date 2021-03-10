require(R.matlab)
require(beeswarm)
require(RColorBrewer)

source('/gdrive/workbench/R/tools/misc/gen_functions.R')
basedir = getwd()
se_shadows<-function(x, y, se, col='#66666666', border = NA) {
	# adds se shadows to data x
	polygon(c(x, rev(x)), c(y + se, rev(y - se)), col = col, border = border)
}

std.error = function(x) {
  sd(x, na.rm = TRUE)/sqrt(length(x[!is.na(x)]))
}

###### set colours ------
ccols = cbind(c(rgb(0.6196, 0.0039, 0.2588), rgb(0.1974, 0.5129, 0.7403)), c(rgb(0.6196, 0.0039, 0.2588, 0.8), rgb(0.1974, 0.5129, 0.7403, 0.8)))

# get file names
files = list.files(file.path(basedir, 'data'), pattern='_data.csv', recursive = TRUE)
csort = sort(as.numeric(unlist(strsplit(unlist(strsplit(files, 'sub')), '_data.csv'))), index.return = TRUE)$ix
files = files[csort]
excluded_subs=c(12, 33, 43, 44, 50, 54, 58, 61, 68, 70);
ids = setdiff(1:length(files), excluded_subs)
files = files[ids]
nsubs = length(ids)
key_order = c('f', 'j', 'k')

choice_valuemat = choice_replenmat = array(NA, c(200, 2, 2, nsubs))
for (csub in 1:nsubs) {
  cdat = read.csv(file.path(basedir, 'data', files[csub]))
  cdat = subset(cdat, !is.na(cdat$blk_type) & (cdat$blk_type>0) & (cdat$decisionType != 0) & (cdat$currentPatchPosition!= 10))
  blockcounts = c(0, 0)
  for (cblock in 1:4) {
    ccdat = subset(cdat, cdat$blk_number == cblock)
    ccond = ccdat$blk_type[1]
    blockcounts[ccond] = blockcounts[ccond] + 1
    cx1 = strsplit(as.character(ccdat$replenishRates[1]), ',')[[1]][1]
    cx2 = strsplit(as.character(ccdat$replenishRates[1]), ',')[[1]][2]
    cx3 = strsplit(as.character(ccdat$replenishRates[1]), ',')[[1]][3]
    creplen = as.numeric(c(substr(cx1, 2, nchar(cx1)),
      substr(cx2, 1, nchar(cx2)),
      substr(cx3, 1, nchar(cx3)-1)))
    corder = sort(creplen, index.return = TRUE)$ix
    cchoices = as.character(ccdat$patch_selection_key)
    cpatches = ccdat$currentPatchPosition
    cmat = cbind(ccdat$patchValueLeft, ccdat$patchValueTop, ccdat$patchValueRight)
    for (cpatch in 1:3) {
      cchoices[cchoices == key_order[cpatch]] = corder[cpatch]
      cpatches[ccdat$currentPatchPosition == cpatch] = corder[cpatch]
    }
    cmat = cmat[,corder]
    cchoices = as.numeric(cchoices)
    cpatches = as.numeric(cpatches)
    cswitches = which(ccdat$decisionType == 3)
    cswitches = cswitches[1:(length(cswitches)-1)]
    high_replen = sapply(cswitches, function(x) cchoices[x+1] == setdiff(1:3, cpatches[x])[2])
    high_value = sapply(cswitches, function(x) which(setdiff(1:3, cpatches[x]) == cchoices[x+1]) == which.max(cmat[x,setdiff(1:3, cpatches[x])]))

    if (is.list(high_value)) {
      cat(csub, '!')
      high_value = unlist(lapply(high_value, function(x) if (length(x)==0) NA else x))
    }
    #choice_replenmat[cswitches,ccond, blockcounts[ccond], csub] = high_replen
    #choice_valuemat[cswitches,ccond, blockcounts[ccond], csub] = high_value
    choice_replenmat[1:length(high_replen),ccond, blockcounts[ccond], csub] = high_replen
    choice_valuemat[1:length(high_value),ccond, blockcounts[ccond], csub] = high_value
  }
}
apply(choice_replenmat[1:50, , ,], c(2, 3), function(x) rowMeans(!is.na(x)))

wdwsize = 8
nwdws = 25 - wdwsize +1
crmat = cvmat = cvrmat = crvmat = array(NA, dim = c(nwdws, nsubs, 2))
for (ccond in 1:2) {
  for (cwdw in 1:nwdws) {
    #cidx = ((cwdw-1)*(200/nwdws) + 1) : ((cwdw)*(200/nwdws))
    cidx = cwdw:(wdwsize + cwdw - 1)
    crmat[cwdw, ,ccond] = apply(choice_replenmat[cidx,ccond,,], 3, mean, na.rm = TRUE)
    cvmat[cwdw, ,ccond] = apply(choice_valuemat[cidx,ccond,,], 3, mean, na.rm = TRUE)
    cvrmat[cwdw, ,ccond] = apply(choice_valuemat[cidx,ccond,,] & !(choice_replenmat[cidx,ccond,,]), 3, mean, na.rm = TRUE)
    crvmat[cwdw, ,ccond] = apply(choice_replenmat[cidx,ccond,,] & !(choice_valuemat[cidx,ccond,,]), 3, mean, na.rm = TRUE)
  }
}

layout(matrix(1:4, 2, 2, byrow = TRUE))
cxlab = 'Time (8 leave choices, rolling window)'
cmeans = apply(crmat, c(1, 3), mean, na.rm = TRUE)
csds = apply(crmat, c(1, 3), function(x) std.error(x))

matplot(cmeans, type = 'l', lwd = 2, col = hcl.colors(2), lty = 1, pch = 16, bty = 'n', xlab = cxlab, ylab = 'Proportion Choices Faster Patch', ylim = c(0.4, 0.7), cex.axis = 1.2, cex.lab = 1.2)
for (i in 1:2) {
  se_shadows(1:length(cmeans[,i]), cmeans[,i], csds[,i], hcl.colors(2, alpha = 0.5)[i])
}
abline(h = 0.5)
legend('topleft', legend = c('Forced', 'Free'), lwd = 2, col = hcl.colors(2), bty = 'n', cex = 1.2)
title('Pref. Faster vs Slower Patch', cex.main = 1.4)


cmeans = apply(cvmat, c(1, 3), mean, na.rm = TRUE)
csds = apply(cvmat, c(1, 3), function(x) std.error(x))
matplot(cmeans, type = 'l', lwd = 2, col = hcl.colors(2), lty = 1, pch = 16, bty = 'n', xlab = cxlab, ylab = 'Choices Higher Valued Patch', ylim = c(0.4, 0.7), cex.axis = 1.2, cex.lab = 1.2)
for (i in 1:2) {
  se_shadows(1:length(cmeans[,i]), cmeans[,i], csds[,i], hcl.colors(2, alpha = 0.5)[i])
}
title('Pref. Higher Valued Patch', cex.main = 1.4)
abline(h = 0.5)

cmeans = apply(cvrmat, c(1, 3), mean, na.rm = TRUE)
csds = apply(cvrmat, c(1, 3), function(x) std.error(x))
matplot(cmeans, type = 'l', lwd = 2, col = hcl.colors(2), lty = 1, pch = 16, bty = 'n', xlab = cxlab, ylab = 'Choices Value over Rate', ylim = c(0.1, 0.4), cex.axis = 1.2, cex.lab = 1.2)
for (i in 1:2) {
  se_shadows(1:length(cmeans[,i]), cmeans[,i], csds[,i], hcl.colors(2, alpha = 0.5)[i])
}
title('Pref. Valued over Faster Patch', cex.main = 1.4)

cmeans = apply(crvmat, c(1, 3), mean, na.rm = TRUE)
csds = apply(crvmat, c(1, 3), function(x) std.error(x))
matplot(cmeans, type = 'l', lwd = 2, col = hcl.colors(2), lty = 1, pch = 16, bty = 'n', xlab = cxlab, ylab = 'Choices Rate over Value', ylim = c(0.1, 0.4), cex.axis = 1.2, cex.lab = 1.2)
for (i in 1:2) {
  se_shadows(1:length(cmeans[,i]), cmeans[,i], csds[,i], hcl.colors(2, alpha = 0.5)[i])
}
title('Pref. Faster over Valued Patch', cex.main = 1.4)


cmeans = apply(crvmat, c(1, 3), mean, na.rm = TRUE)
csds = apply(crvmat, c(1, 3), function(x) std.error(x))
matplot(cmeans, type = 'l', lwd = 2, col = hcl.colors(2), lty = 1, pch = 16, bty = 'n', xlab = cxlab, ylab = 'Choices Valued over Faster', ylim = c(0.1, 0.4), cex.axis = 1.2, cex.lab = 1.2)
for (i in 1:2) {
  se_shadows(1:length(cmeans[,i]), cmeans[,i], csds[,i], hcl.colors(2, alpha = 0.5)[i])
}
title('Pref. Faster over Valued Patch', cex.main = 1.4)


X = apply(crvmat[,,2], c(2), function(x) filter(x, rep(1/2, 2)))
startvals = X[1,]

#csort = sort(startvals, index.return = TRUE)$ix
csort = round(rank(startvals))
X = X - matrix(X[1,], 18, 60, byrow = TRUE)

matplot(X, type = 'l', lwd = 2, col = hcl.colors(60, alpha = 0.5)[csort], lty = 1,
ylim = c(-0.5, 0.5), bty = 'n', xlab = cxlab, ylab = 'Choices Rate over Value (norm.)', cex.axis = 1.2, cex.lab = 1.2)
abline(h = 0)


X0 = apply(crvmat[,,1], c(2), function(x) filter(x, rep(1/2, 2)))
X1 = apply(crvmat[,,2], c(2), function(x) filter(x, rep(1/2, 2)))
X = X1 - X0
startvals = X[1,]
csort = sort(startvals, index.return = TRUE)$ix
csort = round(rank(startvals))
#X = X - matrix(X[1,], 18, 60, byrow = TRUE)

matplot(X, type = 'l', lwd = 2, col = hcl.colors(60, alpha = 0.5)[csort], lty = 1,
ylim = c(-0.5, 0.5), bty = 'n', xlab = cxlab, ylab = 'Choices Rate over Value (norm.)', cex.axis = 1.2, cex.lab = 1.2)
abline(h = 0)


cmeans = apply(crvmat, c(1, 3), mean)
matplot(cmeans, type = 'o', lwd = 2, col = hcl.colors(2), lty = 1, pch = 16)


csds = apply(crmat, c(1, 3), std.error)

apply(choice_valuemat[151:200,2,,], c(2), mean, na.rm = TRUE)

#decisionType: 2 is stay, 3 is leave, 1 is first stay in block, 0 is?


for (cblock in 1:4) {




  #cswitches = cswitches[1:(length(cswitches)-1)]




  matplot(cmat, type = 'l', lwd = 1, bty = 'n', col = hcl.colors(3), lty = 1, ylab = 'Patch value', xlab = 'Action')
  abline(v = cswitches, col = 'grey')


}


matplot(matrix(c((1:6)-0.05, (1:6)+0.05), ncol = 2), cmeans, type = 'o', lwd = 2, bty = 'n', col = ccols[,1], lty = 1, pch = 16, cex.lab = 1.25, cex.axis = 1.25, ylab = 'Avg. p(Leave | Model)', xlab = 'Choice', xaxt = 'n', ylim = c(0,1))


cdat$currentPatchPosition,

summary(cdat)

actions_remaining
total_points
exploit_phase_key
patch_selection_key
decisionType
currentPatchPosition

dim(cdat[[3]]) = c(2308, 108)
dim(cdat[[3]])[2]/(8*13)

cdat[[3]][1:100]
