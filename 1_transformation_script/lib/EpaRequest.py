from lib.cleanupString import cleanupString

def setEpaRequest(method, url, protocolAndVersion):
        method = cleanupString(method) if method is not None else 'INVALID'
        url = cleanupString(url)
        protocol = ''
        vProtocol = ''

        if(protocolAndVersion != '<unknown_protocol_and_version>'):
            protocol, vProtocol = protocolAndVersion.split('/')
            protocol = cleanupString(protocol)
            vProtocol = cleanupString(vProtocol)
        else:
            protocol = None
            vProtocol = None

        return {'method': method, 'url': url, 'protocol': protocol, 'vProtocol': vProtocol}