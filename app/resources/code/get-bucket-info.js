var aws = require('aws-sdk');
var s3 = new aws.S3();

s3.listBuckets(function (error, data) {
    for (var i = 0; i < data.Buckets.length; i++) {
	    if(data.Buckets[i].Name === 'mejorge-site'){
		    console.log(data.Buckets[i]['CreationDate'])
	    }
    }
});
