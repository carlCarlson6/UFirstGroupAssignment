import re
from lib.extractRawRequestData import extractRawRequestData

def extractRawEpaData(stringDataLine: str):
    stringDataSplitBySpace = stringDataLine.split(' ')
    host = stringDataSplitBySpace[0]
    rawDate = stringDataSplitBySpace[1]
    docSize = stringDataSplitBySpace[-1]
    code = stringDataSplitBySpace[-2]

    requestInfoString = ''
    try:
        match = re.search('\".*[ ][a-zA-Z]*\/[0-9]*.[0-9]*\"', stringDataLine)
        if(match == None):
            raise Exception()
        requestInfoString = match.group()
    except:
        match = re.search('\".*\"', stringDataLine)
        requestInfoString = match.group()

    method, url, protocolAndVersion = extractRawRequestData(requestInfoString)

    if(code == '400'):
        url = method
        method = None

    return [host, rawDate, method, url, protocolAndVersion, code, docSize]