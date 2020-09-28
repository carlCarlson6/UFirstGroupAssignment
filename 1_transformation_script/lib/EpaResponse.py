from lib.cleanupString import cleanupString

def setEpaResponse(code, docSize):
    code = int(code)
        
    cleanDocSize = cleanupString(docSize)
    docSize = int(cleanDocSize) if cleanDocSize != '-' else 0

    return {'code': code, 'docSize': docSize}