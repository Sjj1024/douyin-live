import requests

url = "https://v.douyin.com/idMGJvhF"

payload = {}
headers = {
  'Cookie': 'odin_tt=7409a7607c84ba28f27c62495a206c66926666f2bbf038c847b27817acbdbff28c3cf5930de4681d3cfd4c1139dd557e'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
