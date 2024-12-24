class TimeConverter {
    constructor(timeString = '00:00') {
        const [minute, second] = timeString.split(':').map((seg) => +seg);
        const seconds = 60 * minute + second;
        
        this.minute = minute;
        this.second = second;
        this.string = timeString;
        this.seconds = seconds; 
    }
}

TimeConverter.toTimeString = function (seconds) {
    const minute = Math.floor(seconds / 60).toString().padStart(2, '0');
    const second = (seconds % 60).toString().padStart(2, '0');
    return [minute, second].join(':');
}


function solution(video_len, pos, op_start, op_end, commands) {
    const {videoLength,
        position,
        openingStart,
        openingEnd} = {
        videoLength: new TimeConverter(video_len),
        position: new TimeConverter(pos),
        openingStart: new TimeConverter(op_start),
        openingEnd: new TimeConverter(op_end)
    };
    
    
    commands.forEach((command) => {
        if (openingStart.seconds <= position.seconds && position.seconds < openingEnd.seconds) position.seconds = openingEnd.seconds;


        if (command === 'next') {
            const targetPosition = position.seconds + 10;
            position.seconds = targetPosition > videoLength.seconds ? videoLength.seconds : targetPosition;
        }
        
        if (command === 'prev') {
            const targetPosition = position.seconds - 10;
            position.seconds = targetPosition < 0 ? 0 : targetPosition;
        }
        
        if (openingStart.seconds <= position.seconds && position.seconds < openingEnd.seconds) position.seconds = openingEnd.seconds;

    })


    
    return TimeConverter.toTimeString(position.seconds);
}