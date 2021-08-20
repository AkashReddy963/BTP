import pandas
import matplotlib.pyplot as plt
import math
def isvalid(input_list):
    for i in range(29):
        if input_list[i]==0.00:
            return False
    return True
excel_data_df = pandas.read_excel('Bhadra river_Qual2k_tutorial.xlsx', sheet_name='WQ Output',usecols=['Unnamed: 2','Unnamed: 5','Unnamed: 17','Unnamed: 7','Unnamed: 4','Unnamed: 10','Unnamed: 22'])
#print(excel_data_df.columns.ravel())
excel_data_df=excel_data_df.drop([0,1,2,3,4,5,6],axis=0)
#print(excel_data_df)
X = excel_data_df['Unnamed: 2'].tolist()
DO = excel_data_df['Unnamed: 5'].tolist()
PH = excel_data_df['Unnamed: 17'].tolist()
BOD = excel_data_df['Unnamed: 7'].tolist()
NO3 = excel_data_df['Unnamed: 10'].tolist()
ISS = excel_data_df['Unnamed: 4'].tolist()
TKN = excel_data_df['Unnamed: 22'].tolist()
X.reverse()
DO.reverse()
PH.reverse()
BOD.reverse()
NO3.reverse()
ISS.reverse()
TKN.reverse()
available_parametres = 0
WQI=[]
for i in range(29):
    WQI.append(0) #initialise all zeroes
if(isvalid(DO)):
    available_parametres+=1
    for i in range(29):
        #temp = 0
        if DO[i] > 6.5:
            WQI[i]+=1
        elif DO[i]<6.5 and DO[i]>4.6 :
            WQI[i]+=3
        elif DO[i]>2.0 and DO[i]<4.5:
            WQI[i]+=6
        else:
            WQI[i]+=10
if(isvalid(PH)):
    available_parametres+=1
    for i in range(29):
        WQI[i]+=math.exp(abs(PH[i]-7)/1.082)

    
if(isvalid(BOD)):
    available_parametres+=1
    for i in range(29):
        if BOD[i]<2:
            WQI[i]+=1
        else:
            WQI[i]+=(BOD[i]/1.5)

if(isvalid(NO3)):
    available_parametres+=1
    for i in range(29):
        if NO3[i]<=20:
            WQI[i]+=1
        elif NO3[i]>20 and NO3[i]<=50:
            WQI[i]+=math.exp((NO3[i]-154.16)/76.28)
        else:
            WQI[i]+=NO3[i]/65
if(isvalid(ISS)):
    available_parametres+=1
    for i in range(29):
        if ISS[i]<20:
            WQI[i]+=1
        elif ISS[i]>=20 and ISS[i]<=49:
            WQI[i]+=3
        elif ISS[i]>=50 and ISS[i]<=100:
            WQI[i]+=6
        else:
            WQI[i]+=6
if(isvalid(TKN)):
    available_parametres+=1
    if TKN[i]<0.5:
        WQI[i]+=1
    elif TKN[i]>=0.5 and TKN[i]<=0.99:
        WQI[i]+=3
    elif TKN[i]>=1 and TKN[i]<=3:
        WQI[i]+=6
    else:
        WQI[i]+=10

if available_parametres!=0:
    for i in range(29):
        WQI[i]/=available_parametres
print(available_parametres)
#print(DO)
#print(len(X))
#print(len(DO))
lati = [13.237427429986727,13.234040650475047,13.226919318280471,13.220373186780114,13.214565088368953,13.209190537893152,13.202488219926257,13.197979882164974,13.204199660056243,13.20656548986791,13.2090096824253,13.209360789506652,13.208455155125018,13.212175201036517,13.207610822217017,13.20642373534999,13.21205068516866,13.216272243753368,13.212373922603481,13.212117561916477,13.211156206948843,13.205903519459017,13.205622072528882,13.208648306591009,13.21453625854513,13.222051341483827,13.22633959984309,13.224559104069446,13.229699936702014]
longi = [75.17831168101472,75.17587879338807, 75.17499314466153,75.1772472340153,75.18193615624256,75.18547529923937,75.19082317213109,75.19550484036917,75.1987411281844,75.20651798069647,75.21353680461323,75.22146822096458,75.22930231931599,75.23598577559122,75.24272361551832,75.25166255936001,75.25454984089461,75.2569513055011,75.26157104785175,75.2664455344316,75.27377873133574,75.28094305301288,75.28930667573731,75.29571248943518,75.30031505813517,75.30381564354727,75.31158104684977,75.31623513670458,75.32045129566491]
finallist=[]
for i in range(29):
    temp = {"lat":lati[i],"lng":longi[i],"color":"red"} # default set to polluted
    if(available_parametres==0):
        continue
    if WQI[i]<2.0:

        temp["color"]="green"
    elif WQI[i]<=3.0 and WQI[i]>=2.0:
        temp["color"]="yellow"
    elif WQI[i]>3.0 and WQI[i]<6.0:
        temp["color"]="orange"
    else:
        temp["color"]="red"
    finallist.append(temp)

#print(len(lati))

#print(len(longi))
#print(finallist)

#plt.scatter(X,Y)
#plt.show()
