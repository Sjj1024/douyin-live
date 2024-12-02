import os
import re
import requests

# 配置
PROJECT_DIR = '/Users/song/Project/hadofront/frontmgntminiapp/src'  # 项目目录路径
DOWNLOAD_DIR = './downloaded_images'  # 图片下载保存路径

# 确保下载文件夹存在
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

# 查找阿里云 OSS 图片 URL 的正则表达式
image_url_pattern = re.compile(r'https?://.*?aliyuncs\.com/.*?(?:jpg|jpeg|png|gif|svg)')


# 遍历项目目录中的所有文件
def find_image_urls(directory):
    image_urls = set()
    file_set = set()
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.js', '.ts', '.vue', '.html', '.css', '.scss', '.json')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    # 查找文件中的所有图片 URL
                    urls = image_url_pattern.findall(content)
                    image_urls.update(urls)
                    if len(urls) > 0:
                        file_set.update(file_path)
                    print(f"{file_path}找到了{len(urls)}个")
                # 查找文件中的所有图片 URL
                updated_content = content
                # matches = image_url_pattern.findall(content)
                if urls:
                    for image_path in urls:
                        image_name = image_path.split("/")[-1]
                        new_url = "https://global-resource-dev.s3.ap-southeast-2.amazonaws.com/HADOGO_FILE/hado-H5/" + image_name
                        # 替换内容中的图片 URL
                        updated_content = updated_content.replace(image_path, new_url)

                    # 将修改后的内容写回原文件
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    print(f"Updated image URLs in {file_path}")
    print(f"文件数：{len(file_set)}")
    return image_urls


# 下载图片
def download_images(image_urls):
    for url in image_urls:
        filename = os.path.basename(url)
        filepath = os.path.join(DOWNLOAD_DIR, filename)

        if not os.path.exists(filepath):
            print(f"Downloading {url} to {filepath}")
            response = requests.get(url, stream=True)
            if response.status_code == 200:
                with open(filepath, 'wb') as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
            else:
                print(f"Failed to download {url} (status code: {response.status_code})")
        else:
            print(f"{filename} already exists, skipping...")


# 主函数
def main():
    # 获取所有图片外链
    print("Finding image URLs in project files...")
    image_urls = find_image_urls(PROJECT_DIR)
    print('images list:')
    print(image_urls)
    if image_urls:
        print(f"Found {len(image_urls)} images. Starting download...")
        download_images(image_urls)
        print("All images downloaded.")
    else:
        print("No images found.")


if __name__ == "__main__":
    main()
