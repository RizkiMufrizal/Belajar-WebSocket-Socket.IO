'use strict';

var socket = io();
var DataChatKirim = {};

$(document).ready(function() {
  $('#kirim').on('click', function() {
    DataChatKirim.nama = $('#nama').val();
    DataChatKirim.pesan = $('#pesan').val();

    socket.emit('chat:pesan', DataChatKirim);
    $('#nama').val('');
    $('#pesan').val('');
  });
});

socket.on('chat:pesan', function(DataChat) {
  if (DataChatKirim.nama === DataChat.nama) {
    $('#listPesan').prepend($('<li class="list-group-item text-right">').text(DataChat.nama + ' : ' + DataChat.pesan));
  } else {
    $('#listPesan').prepend($('<li class="list-group-item text-left">').text(DataChat.nama + ' : ' + DataChat.pesan));
  }
});
