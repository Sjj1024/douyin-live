import gzip


def main():
    print("解压缩gzip")
    res = gzip.compress(b"hello world")
    print(f"res: {res}")


if __name__ == '__main__':
    main()
