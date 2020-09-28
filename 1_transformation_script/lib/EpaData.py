from lib.cleanupDate import cleanupDate
from lib.EpaRequest import setEpaRequest
from lib.EpaResponse import setEpaResponse

class EpaData:
    def __init__(self, host, dateString, method, url, protocolAndVersion, code, docSize):
        self.host = host
        self.date = cleanupDate(dateString)
        self.request = setEpaRequest(method, url, protocolAndVersion)
        self.response = setEpaResponse(code, docSize)