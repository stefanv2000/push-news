/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        $('.container').append('device ready <br/>');
        console.log('device ready');
        
        
        var push = PushNotification.init({ "android": {"senderID": "988854512822"},
         "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

    push.on('registration', function(data) {
        // data.registrationId
        $('.container').append('registration '+data.registrationId+' <br/>');
        console.log('registration '+data.registrationId);
        $.get('http://proveba.com/sendreg.php?id='+data.registrationId,{},function(data){
            console.log('ies');
        });
        
    });

    push.on('notification', function(data) {
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
        
        console.log(data);
        
        $('.container').append('notification '+data.message+' <br/>');
        console.log('notification '+data.message);
                $('.container').append('notification '+data.title+' <br/>');
        console.log('notification '+data.title);
                $('.container').append('notification '+data.additionalData.otherinfo+' <br/><br/>');
        console.log('notification '+data.additionalData.otherinfo);

    });

    push.on('error', function(e) {
        // e.message
        
                        $('.container').append('error '+e.message+' <br/>');
        console.log('error '+e.message);
    });
    },

};

app.initialize();



