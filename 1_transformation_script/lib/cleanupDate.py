def cleanupDate(dateString: str):
    dataString = dateString.replace('[', '').replace(']', '')
    dayHourMinuteSecond = dataString.split(':')

    return {
        'day': int(dayHourMinuteSecond[0]),
        'hour': int(dayHourMinuteSecond[1]),
        'minute': int(dayHourMinuteSecond[2]),
        'second': int(dayHourMinuteSecond[3]),
    }