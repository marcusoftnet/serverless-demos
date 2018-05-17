/* global require, module */
var aws = require('aws-sdk')
module.exports = function convert (bucket, fileKey, callback) {
  'use strict'
  const s3 = new aws.S3()
  const Transform = require('stream').Transform
  const uppercase = new Transform({decodeStrings: false})

  uppercase._transform = function (chunk, encoding, done) {
    done(null, chunk.toUpperCase())
  }

  let stream = s3.getObject({
    Bucket: bucket,
    Key: fileKey
  }).createReadStream()
  stream.setEncoding('utf8')
  stream.pipe(uppercase)
  s3.upload({
    Bucket: bucket,
    Key: fileKey.replace(/^in/, 'out'),
    Body: uppercase,
    ACL: 'private'
  }, callback)
}
