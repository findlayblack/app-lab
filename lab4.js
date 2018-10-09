const data = [
    {jacketCount:1.0, jacketTime: 3.2},
    {jacketCount:1.0, jacketTime:1.4},
    {jacketCount:1.0, jacketTime:2.4},
    {jacketCount:1.0, jacketTime:2.3},
    {jacketCount:1.0, jacketTime:0.3},
    {jacketCount:1.0, jacketTime:1.7},
    {jacketCount:1.0, jacketTime:5.4},
    {jacketCount:1.0, jacketTime:2.2},
    {jacketCount:2.0, jacketTime:3.8},
    {jacketCount:2.0, jacketTime:1.6},
    {jacketCount:1.0, jacketTime:3.2},
    {jacketCount:1.0, jacketTime:3.9},
    {jacketCount:1.0, jacketTime:2.1},
    {jacketCount:3.0, jacketTime:5.5},
    {jacketCount:2.0, jacketTime:0.4},
    {jacketCount:2.0, jacketTime:2.6},
    {jacketCount:1.0, jacketTime:6.3},
    {jacketCount:1.0, jacketTime:2.7},
    {jacketCount:2.0, jacketTime:3.6},
    {jacketCount:2.0, jacketTime:1.6},
    {jacketCount:1.0, jacketTime:3.5},
    {jacketCount:1.0, jacketTime:4.7},
    {jacketCount:3.0, jacketTime:2.8},
    {jacketCount:2.0, jacketTime:3.5},
    {jacketCount:2.0, jacketTime:3.7},
    {jacketCount:1.0, jacketTime:2.1},
    {jacketCount:3.0, jacketTime:1.9},
    {jacketCount:2.0, jacketTime:2.5},
    {jacketCount:1.0, jacketTime:3.5},
    {jacketCount:1.0, jacketTime:4.1},
    {jacketCount:1.0, jacketTime:3.1},
    {jacketCount:1.0, jacketTime:2.2}];

//store our n
const n = data.length;

//sum of x^2
const xSquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].jacketCount, 2) + count;
    }
    return count;
}

//sum of y^2
const ySquaredSum = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = Math.pow(data[i].jacketTime, 2) + count;
    }
    return count;
}

//(sum of x)^2
const sumXSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].jacketCount + count;
    }
    return Math.pow(count,2);
}

//(sum of y)^2
const sumYSquared = () => {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].jacketTime + count;
    }
    return Math.pow(count,2);
}


//x*y
const sumXTimesY = function() {
    count = 0;
    for(i=0;i<data.length;i++) {
        count = data[i].jacketCount * data[i].jacketTime + count;
    }
    return count;
}

//now plug into our formula
const pearsonCorrelation = () => {
    return (sumXTimesY() - sumXTimesY()/n) / ((Math.sqrt(xSquaredSum()) -(sumXSquared()/n)) * (Math.sqrt(ySquaredSum()) -(sumYSquared()/n)));
}

console.log(pearsonCorrelation());
