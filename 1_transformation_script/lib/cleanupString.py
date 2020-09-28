def cleanupString(stringToClean: str):
    charactersToDelete = ['"', '\n', '\x01', '\x02', '\x03', '\x07', '\x15', '\x1c', '\x7F']

    for characterToDelete in charactersToDelete:
        stringToClean = stringToClean.replace(characterToDelete, '')

    return stringToClean 