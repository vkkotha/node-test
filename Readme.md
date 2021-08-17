`docker build -t myhaproxy .`
`docker run --rm -it --name myhaproxy -p 80:80 -p 1936:1936 myhaproxy`
