import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fcskdwfjeadvfufqlygk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjc2tkd2ZqZWFkdmZ1ZnFseWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwOTE5NTUsImV4cCI6MjA4ODY2Nzk1NX0.iL3VgdKd-TtNRu5RM8nuCZ0xPo5i-W3wHD4-fArrxjY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjc2tkd2ZqZWFkdmZ1ZnFseWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwOTE5NTUsImV4cCI6MjA4ODY2Nzk1NX0.iL3VgdKd-TtNRu5RM8nuCZ0xPo5i-W3wHD4-fArrxjY"
    }
})