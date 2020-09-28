from lib.EpaData import EpaData
from lib.extractRawEpaData import extractRawEpaData
import json

print('reading file')

epaFile = open('data/epa-http.txt', 'r')
epaStrings = epaFile.readlines();

print('processing data')

epaRawDataList = [extractRawEpaData(epaString) for epaString in epaStrings]
epaData = [EpaData(epaRawData[0], epaRawData[1], epaRawData[2], epaRawData[3], epaRawData[4], epaRawData[5], epaRawData[6]) for epaRawData in epaRawDataList]


if(len(epaData) != len(epaStrings)):
    raise Exception('some data is lost')

print('writting data')

epaDataJson = json.dumps([epa.__dict__ for epa in epaData])
with open('data/epa-http.json', 'w') as f:
    f.write(epaDataJson)
    
print('done')