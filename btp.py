import numpy as np
#import xlsxwriter
from mat4py import loadmat

extreme_sf_wt_st = loadmat('extreme_SF_WT.mat')
#extreme_sf_wt    = extreme_sf_wt_st.Extreme_SF_WT
x=extreme_sf_wt_st['Extreme_SF_WT']
print(x)
sf=[]
wt=[]
for i in x:
  sf.append(i[0])
  wt.append(i[1])
man_n_1 = 0.8282
bedw_1  = 138.08
slope_1 = 0.000277055
ET1     = 30.85
E1      = 0.436
T1      = wt
R1 = []

for i in range(len(sf)):
  R1.append(sf[i] + E1)

   
T_1 =0
for i in range(len(sf)):
  T_1+=((sf[i]*wt[i])+(E1*ET1))/(sf[i]+E1)
for i in range(len(R1)):
  R1[i]*=1.80
KD_20_1  = np.power(R1,-0.49)
#T_1  = (sf*T1+E1*ET1)/(sf +E1)
KD_T1  = np.power(KD_20_1*1.047,(T_1 -20))
Kr_20_1 = np.power(3.93*slope_1,0.6)*np.power(bedw_1,0.7)*np.power(man_n_1,-1.2)*np.power(R1,-0.7)
Kr_T1 = np.power(Kr_20_1*1.024,(T_1-20))


xlswrite('yamuna_warningfree_all combination - st15_1.xls',sf(i,1),'Headwater','D11')
xlswrite('yamuna_warningfree_all combination - st15_1.xls',wt(i,1),'Headwater','D13')
xlswrite('yamuna_warningfree_all combination - st15_1.xls',Kr_T1(i,1),'Reach Rates','C10')
xlswrite('yamuna_warningfree_all combination - st15_1.xls',KD_T1(i,1),'Reach Rates','G10')
ExcelApp = actxserver('Excel.Application');
    #ExcelApp.Visible = 1
Workbook = ExcelApp.Workbooks.Open(fullfile(pwd,'\yamuna_warningfree_all combination - st15_1.xls'))
hand = ExcelApp.Run('RunQ2K_Fortran')
    #ExcelApp.save('yamuna.xls')
Workbooks = ExcelApp.Workbooks               
    
Workbook.Save;   
Workbooks.Close; 
    
ExcelApp.Quit
   # c_do(:,i)    = xlsread('yamuna_warningfree_all combination - st15_1.xls','WQ Output','f11');
