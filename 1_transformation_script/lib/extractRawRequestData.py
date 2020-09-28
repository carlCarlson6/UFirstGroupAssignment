import re

def extractRawRequestData(requestString: str):
    requestStringSplit = requestString.split(' ')
    
    method = requestStringSplit[0]
    protocolAndVersion = ''
    subRequestStringSplit = []

    if(re.search('[a-zA-Z]*\/[0-9]*.[0-9]*\"', requestString) != None):
        protocolAndVersion = requestStringSplit[-1]
        subRequestStringSplit = requestStringSplit[1: -1]
    else:
        protocolAndVersion = '<unknown_protocol_and_version>'
        subRequestStringSplit = requestStringSplit[1:]

    url = str.join(' ', subRequestStringSplit)

    return [method, url, protocolAndVersion]
