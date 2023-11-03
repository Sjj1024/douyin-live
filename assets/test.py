import requests
import urllib.parse
from bs4 import BeautifulSoup


def get_new_temp(info):
    print("编写新文章")
    url = "https://www.hado-official.cn/wp-admin/post-new.php"
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Cookie': 'wordpress_sec_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C4ffedd21271dbc2192f083ec13fcdc4fa17b3f3d41b3b9967343279979694f4d; wordpress_sec_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7C7fec1790441d6ed7339e27fda21fa7e20806479f39ac30eb838767cb644bab36; _ga_K3L2Y0PNCG=GS1.2.1698208627.1.1.1698209542.0.0.0; wordpress_test_cookie=WP%20Cookie%20check; wp_lang=zh_CN; __lt__cid=47141d7e-6c8c-4fde-bfd2-55f2aabd7c41; _clck=js31o5|2|fga|0|1398; _ga=GA1.2.1445551004.1698208627; _ga_DJGS8M1ENG=GS1.1.1698648391.1.1.1698648551.8.0.0; wordpress_logged_in_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C3b2c0ea0e02d526676a824da23a13b14a9164820b3880ea718c8c1f06a735392; wordpress_logged_in_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7Cc9fa3e13275341ff50a2bab7515f2ded4c910459227442159fef6a8027e36675; wp-settings-1=libraryContent%3Dbrowse%26editor%3Dhtml; wp-settings-time-1=1698804663; wp-saving-post=3793-saved',
        'Origin': 'https://www.hado-official.cn',
        'Referer': 'https://www.hado-official.cn/wp-admin/upload.php',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }
    response = requests.request("GET", url, headers=headers)
    soup = BeautifulSoup(response.content.decode("utf-8"), 'html.parser')
    post_id = soup.select_one("#post_ID").get("value")
    wpnonce_val = soup.select_one("#_wpnonce").get("value")
    # 保存为草稿结果
    flag = save_template(post_id, wpnonce_val)
    if flag:
        print(f"可以发布文章")
        # 修改发布文章
        info["post_id"] = post_id
        info["wpnonce_val"] = wpnonce_val
        post_new(info)
    else:
        print(f"草稿保存失败,无法发布文章")


def save_template(post_id, wpnonce):
    print("保存为草稿")
    url = "https://www.hado-official.cn/wp-admin/admin-ajax.php"
    # payload = f"data%5Bwp_autosave%5D%5Bpost_id%5D={post_id}&data%5Bwp_autosave%5D%5Bpost_type%5D=post&data%5Bwp_autosave%5D%5Bpost_author%5D=1&data%5Bwp_autosave%5D%5Bpost_title%5D=66666&data%5Bwp_autosave%5D%5Bcontent%5D=66666&data%5Bwp_autosave%5D%5Bexcerpt%5D=&data%5Bwp_autosave%5D%5Bcatslist%5D=&data%5Bwp_autosave%5D%5Bauto_draft%5D=1&data%5Bwp_autosave%5D%5B_wpnonce%5D={wpnonce}&interval=60&_nonce=b956fcdab6&action=heartbeat&screen_id=post&has_focus=true"
    # payload = f"data%5Bwp_autosave%5D%5Bpost_id%5D={post_id}&data%5Bwp_autosave%5D%5Bpost_type%5D=post&data%5Bwp_autosave%5D%5Bpost_author%5D=1&data%5Bwp_autosave%5D%5Bpost_title%5D=66666&data%5Bwp_autosave%5D%5Bcontent%5D=66666&data%5Bwp_autosave%5D%5Bexcerpt%5D=&data%5Bwp_autosave%5D%5Bcatslist%5D=&data%5Bwp_autosave%5D%5Bauto_draft%5D=1&data%5Bwp_autosave%5D%5B_wpnonce%5D={wpnonce}&interval=60&_nonce=b956fcdab6&action=heartbeat&screen_id=post&has_focus=true"
    payload = f"data%5Bwp_autosave%5D%5Bpost_id%5D={post_id}&data%5Bwp_autosave%5D%5Bpost_type%5D=post&data%5Bwp_autosave%5D%5Bpost_author%5D=1&data%5Bwp_autosave%5D%5Bpost_title%5D=444&data%5Bwp_autosave%5D%5Bcontent%5D=444&data%5Bwp_autosave%5D%5Bexcerpt%5D=&data%5Bwp_autosave%5D%5Bcatslist%5D=&data%5Bwp_autosave%5D%5Bauto_draft%5D=1&data%5Bwp_autosave%5D%5B_wpnonce%5D={wpnonce}&interval=60&_nonce=3c3dfdb2a6&action=heartbeat&screen_id=post&has_focus=true"
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'wordpress_sec_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C4ffedd21271dbc2192f083ec13fcdc4fa17b3f3d41b3b9967343279979694f4d; wordpress_sec_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7C7fec1790441d6ed7339e27fda21fa7e20806479f39ac30eb838767cb644bab36; _ga_K3L2Y0PNCG=GS1.2.1698208627.1.1.1698209542.0.0.0; wordpress_test_cookie=WP%20Cookie%20check; wp_lang=zh_CN; __lt__cid=47141d7e-6c8c-4fde-bfd2-55f2aabd7c41; _clck=js31o5|2|fga|0|1398; _ga=GA1.2.1445551004.1698208627; _ga_DJGS8M1ENG=GS1.1.1698648391.1.1.1698648551.8.0.0; wordpress_logged_in_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C3b2c0ea0e02d526676a824da23a13b14a9164820b3880ea718c8c1f06a735392; wordpress_logged_in_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7Cc9fa3e13275341ff50a2bab7515f2ded4c910459227442159fef6a8027e36675; wp-settings-1=libraryContent%3Dbrowse%26editor%3Dhtml; wp-settings-time-1=1698804663; wp-saving-post=3793-saved',
        'Origin': 'https://www.hado-official.cn',
        'Referer': 'https://www.hado-official.cn/wp-admin/post-new.php',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    res_json = response.json()
    success = res_json.get("wp-auth-check")
    print(f"保存为草稿结果: {res_json}")
    return success


def post_new(info):
    print("发送新文章")
    url = "https://www.hado-official.cn/wp-admin/post.php"
    wpnonce = info.get("wpnonce_val")
    post_ID = info.get("post_id")
    post_title = info.get("title")
    post_title_encode = urllib.parse.quote(post_title)
    content = info.get("content")
    content_encode = urllib.parse.quote(content)
    tags = info.get("tags")
    yy = info.get("year")
    mm = info.get("month")
    jj = info.get("day")
    hh = info.get("hours")
    mn = info.get("minute")
    thumbnail_id = info.get("first_img_id")
    # payload = f'_wpnonce={wpnonce}&_wp_http_referer=%2Fwp-admin%2Fpost-new.php&user_ID=1&action=editpost&originalaction=editpost&post_author=1&post_type=post&original_post_status=auto-draft&referredby=https%3A%2F%2Fwww.hado-official.cn%2Fwp-admin%2Fpost.php%3Fpost%3D3826%26action%3Dedit&_wp_original_http_referer=https%3A%2F%2Fwww.hado-official.cn%2Fwp-admin%2Fpost.php%3Fpost%3D3826%26action%3Dedit&auto_draft=&post_ID={post_ID}&meta-box-order-nonce=89f586259e&closedpostboxesnonce=e53e3fb3e1&post_title={post_title_encode}&samplepermalinknonce=3bea926f4e&smart-cf-debug-preview=smart-cf-debug-preview&_acf_screen=post&_acf_post_id=3828&_acf_validation=1&_acf_nonce=c6c8f0fb3b&_acf_changed=0&content={content_encode}&wp-preview=&hidden_post_status=draft&post_status=draft&hidden_post_password=&hidden_post_visibility=public&visibility=public&post_password=&aa={yy}&mm={mm}&jj={jj}&hh={hh}&mn={mn}&ss=49&hidden_mm=10&cur_mm=10&hidden_jj=31&cur_jj=31&hidden_aa=2023&cur_aa=2023&hidden_hh=17&cur_hh=17&hidden_mn=29&cur_mn=29&original_publish=%E5%8F%91%E5%B8%83&publish=%E5%8F%91%E5%B8%83&post_category%5B%5D=0&newcategory=%E6%96%B0%E5%88%86%E7%B1%BB%E5%90%8D&newcategory_parent=-1&_ajax_nonce-add-category=6d9e185086&tax_input%5Bpost_tag%5D={tags}&newtag%5Bpost_tag%5D=&enable_post_addtoany_sharing=1&addtoany_sharing_status_hidden=1&_thumbnail_id={thumbnail_id}&excerpt=&trackback_url=&advanced_view=1&post_name=&post_author_override=1'
    # payload = f'_wpnonce={wpnonce}&_wp_http_referer=%2Fwp-admin%2Fpost-new.php&user_ID=1&action=editpost&originalaction=editpost&post_author=1&post_type=post&original_post_status=auto-draft&referredby=https%3A%2F%2Fwww.hado-official.cn%2Fwp-admin%2Fpost.php%3Fpost%3D3826%26action%3Dedit&_wp_original_http_referer=https%3A%2F%2Fwww.hado-official.cn%2Fwp-admin%2Fpost.php%3Fpost%3D3826%26action%3Dedit&auto_draft=&post_ID={post_ID}&meta-box-order-nonce=89f586259e&closedpostboxesnonce=e53e3fb3e1&post_title={post_title_encode}&samplepermalinknonce=3bea926f4e&smart-cf-debug-preview=smart-cf-debug-preview&_acf_screen=post&_acf_post_id=3828&_acf_validation=1&_acf_nonce=c6c8f0fb3b&_acf_changed=0&content={content_encode}&wp-preview=&hidden_post_status=draft&post_status=draft&hidden_post_password=&hidden_post_visibility=public&visibility=public&post_password=&aa={yy}&mm={mm}&jj={jj}&hh={hh}&mn={mn}&ss=49&hidden_mm=10&cur_mm=10&hidden_jj=31&cur_jj=31&hidden_aa=2023&cur_aa=2023&hidden_hh=17&cur_hh=17&hidden_mn=29&cur_mn=29&original_publish=%E5%8F%91%E5%B8%83&publish=%E5%8F%91%E5%B8%83&post_category%5B%5D=0&newcategory=%E6%96%B0%E5%88%86%E7%B1%BB%E5%90%8D&newcategory_parent=-1&_ajax_nonce-add-category=6d9e185086&tax_input%5Bpost_tag%5D={tags}&newtag%5Bpost_tag%5D=&enable_post_addtoany_sharing=1&addtoany_sharing_status_hidden=1&_thumbnail_id={thumbnail_id}&excerpt=&trackback_url=&advanced_view=1&post_name=&post_author_override=1'
    payload = f'_wpnonce={wpnonce}&_wp_http_referer=%2Fwp-admin%2Fpost-new.php&user_ID=1&action=editpost&originalaction=editpost&post_author=1&post_type=post&original_post_status=auto-draft&referredby=https%3A%2F%2Fwww.hado-official.cn%2Fwp-admin%2Fedit.php&_wp_original_http_referer=https%3A%2F%2Fwww.hado-official.cn%2Fwp-admin%2Fedit.php&auto_draft=&post_ID={post_ID}&meta-box-order-nonce=c1e1a5d5e0&closedpostboxesnonce=5e3a94dcef&post_title={post_title_encode}&samplepermalinknonce=9eccdb892f&smart-cf-debug-preview=smart-cf-debug-preview&_acf_screen=post&_acf_post_id=3903&_acf_validation=1&_acf_nonce=2ea073f0c0&_acf_changed=0&content={content_encode}&wp-preview=&hidden_post_status=draft&post_status=draft&hidden_post_password=&hidden_post_visibility=public&visibility=public&post_password=&aa={yy}&mm={mm}&jj={jj}&hh={hh}&mn={mn}&ss=13&hidden_mm=11&cur_mm=11&hidden_jj=01&cur_jj=01&hidden_aa=2023&cur_aa=2023&hidden_hh=10&cur_hh=10&hidden_mn=48&cur_mn=48&original_publish=%E5%8F%91%E5%B8%83&publish=%E5%8F%91%E5%B8%83&post_category%5B%5D=0&post_category%5B%5D=1&newcategory=%E6%96%B0%E5%88%86%E7%B1%BB%E5%90%8D&newcategory_parent=-1&_ajax_nonce-add-category=e656f3132a&tax_input%5Bpost_tag%5D={tags}&newtag%5Bpost_tag%5D=&enable_post_addtoany_sharing=1&addtoany_sharing_status_hidden=1&_thumbnail_id={thumbnail_id}&excerpt=&trackback_url=&advanced_view=1&post_name=&post_author_override=1'
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'wordpress_sec_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C4ffedd21271dbc2192f083ec13fcdc4fa17b3f3d41b3b9967343279979694f4d; wordpress_sec_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7C7fec1790441d6ed7339e27fda21fa7e20806479f39ac30eb838767cb644bab36; wp-saving-post=3903-check; _ga_K3L2Y0PNCG=GS1.2.1698208627.1.1.1698209542.0.0.0; wordpress_test_cookie=WP%20Cookie%20check; wp_lang=zh_CN; __lt__cid=47141d7e-6c8c-4fde-bfd2-55f2aabd7c41; _clck=js31o5|2|fga|0|1398; _ga=GA1.2.1445551004.1698208627; _ga_DJGS8M1ENG=GS1.1.1698648391.1.1.1698648551.8.0.0; wordpress_logged_in_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C3b2c0ea0e02d526676a824da23a13b14a9164820b3880ea718c8c1f06a735392; wordpress_logged_in_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7Cc9fa3e13275341ff50a2bab7515f2ded4c910459227442159fef6a8027e36675; wp-settings-1=libraryContent%3Dbrowse%26editor%3Dhtml; wp-settings-time-1=1698804663; wp-saving-post=3793-saved',
        'Origin': 'https://www.hado-official.cn',
        'Referer': 'https://www.hado-official.cn/wp-admin/post-new.php?wp-post-new-reload=true',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)


def upload_img(img_url):
    print("上传图片")
    url = "https://www.hado-official.cn/wp-admin/async-upload.php"
    hadohado_hander = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'wordpress_7065e52903d65f938161fb677f94f12f=hado2023%7C1699422535%7CfAIuT39o9aQHheZk58GxLiOGtpTSeHZtI6L7iiVfepu%7C9b7631466c7e306756c4d726af960a95760eb188b47815b83472839cd4d3196e; wordpress_logged_in_7065e52903d65f938161fb677f94f12f=hado2023%7C1699422535%7CfAIuT39o9aQHheZk58GxLiOGtpTSeHZtI6L7iiVfepu%7Cd7cf14d754e39488545e413d93a69edfb41526786366a6ac27e64d18e2c2a459; _ga=GA1.2.2082148665.1698213126; _ga_K3L2Y0PNCG=GS1.2.1698213126.1.1.1698213986.0.0.0; wp-settings-time-2=1698722832; wp-settings-2=libraryContent%3Dbrowse%26editor%3Dtinymce%26mfold%3Do',
        'Referer': 'http://hadohado.com/wp-admin/edit.php?post_type=post&all_posts=1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    }
    img_data = requests.get(img_url, headers=hadohado_hander).content
    img_name = img_url.split("/")[-1]
    img_type = img_name.split(".")[-1]
    payload = {'name': img_name,
               'action': 'upload-attachment',
               '_wpnonce': '89973b2d6a'}
    files = [
        ('async-upload', (img_name,
                          img_data, f'image/{img_type}'))
    ]
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Cookie': 'wordpress_sec_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C4ffedd21271dbc2192f083ec13fcdc4fa17b3f3d41b3b9967343279979694f4d; wordpress_sec_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7C7fec1790441d6ed7339e27fda21fa7e20806479f39ac30eb838767cb644bab36; _ga_K3L2Y0PNCG=GS1.2.1698208627.1.1.1698209542.0.0.0; wordpress_test_cookie=WP%20Cookie%20check; wp_lang=zh_CN; __lt__cid=47141d7e-6c8c-4fde-bfd2-55f2aabd7c41; _clck=js31o5|2|fga|0|1398; _ga=GA1.2.1445551004.1698208627; _ga_DJGS8M1ENG=GS1.1.1698648391.1.1.1698648551.8.0.0; wordpress_logged_in_25cc83ebf9d3cb174849f4eae20b02e0=admin%7C1699866001%7CeGYD27cqDVd6AsWf4MuzoTpeh6ydFIKPSPyLe8lo4V8%7C3b2c0ea0e02d526676a824da23a13b14a9164820b3880ea718c8c1f06a735392; wordpress_logged_in_02982d8c357ccccc73340f4e7fa7b7fd=admin%7C1699926871%7CWCtTg9h7j9YGGq07LRqBFGaDs3lh4YrpTijLtaUv1Pv%7Cc9fa3e13275341ff50a2bab7515f2ded4c910459227442159fef6a8027e36675; wp-settings-1=libraryContent%3Dbrowse%26editor%3Dhtml; wp-settings-time-1=1698804663; wp-saving-post=3793-saved',
        'Origin': 'https://www.hado-official.cn',
        'Referer': 'https://www.hado-official.cn/wp-admin/upload.php',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }
    response = requests.request("POST", url, headers=headers, data=payload, files=files)
    res_json = response.json()
    img_id = res_json.get("data").get("id")
    print(response.json())
    return img_id


def get_one(post_id):
    print("获取单篇文章数据")
    url = f"http://hadohado.com/wp-admin/post.php?post={post_id}&action=edit"
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'wordpress_7065e52903d65f938161fb677f94f12f=hado2023%7C1699422535%7CfAIuT39o9aQHheZk58GxLiOGtpTSeHZtI6L7iiVfepu%7C9b7631466c7e306756c4d726af960a95760eb188b47815b83472839cd4d3196e; wordpress_logged_in_7065e52903d65f938161fb677f94f12f=hado2023%7C1699422535%7CfAIuT39o9aQHheZk58GxLiOGtpTSeHZtI6L7iiVfepu%7Cd7cf14d754e39488545e413d93a69edfb41526786366a6ac27e64d18e2c2a459; _ga=GA1.2.2082148665.1698213126; _ga_K3L2Y0PNCG=GS1.2.1698213126.1.1.1698213986.0.0.0; wp-settings-time-2=1698722832; wp-settings-2=libraryContent%3Dbrowse%26editor%3Dtinymce%26mfold%3Do',
        'Referer': 'http://hadohado.com/wp-admin/edit.php?post_type=post&all_posts=1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers)
    html_content = response.content.decode("utf-8")
    print(html_content)
    soup = BeautifulSoup(html_content, 'html.parser')
    title = soup.select_one("#title").get("value")
    content = soup.select_one("#content").get_text().replace("http://hadohado.com", "https://www.hado-official.cn")
    times = soup.select_one("#timestamp > b").get_text()
    year = times.split("年")[0]
    month = times.split("月")[0].split("年")[1]
    day = times.split("月")[1].split("日")[0]
    hours = times.split(" ")[1].split(":")[0]
    minute = times.split(" ")[1].split(":")[1]
    tags = soup.select_one("#tax-input-post_tag").get_text()
    first_img_url = soup.select_one("#set-post-thumbnail > img").get("src")
    first_img_id = upload_img(first_img_url)
    info = {
        "title": title,
        "content": content,
        "year": year,
        "month": month,
        "day": day,
        "hours": hours,
        "minute": minute,
        "tags": tags,
        "first_img_id": first_img_id,
    }
    return info


def get_articles():
    print("获取所有文章列表数据")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    }
    res = requests.get("http://hadohado.com/news", headers=headers)
    html = res.content.decode("utf-8")
    soup = BeautifulSoup(html, 'html.parser')
    print("res-", html)
    a_link = soup.select("ul > li > div > div.card-body > a")
    print(a_link)
    links = [i.get("href") for i in a_link]
    return links


def run():
    print("总控制")
    links = get_articles()
    for link in links:
        post_id = link.split("=")[1]
        # 获取文章信息
        info = get_one(post_id)
        # 保存草稿并发布
        get_new_temp(info)


if __name__ == '__main__':
    run()
