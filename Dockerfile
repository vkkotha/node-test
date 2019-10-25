FROM haproxy:2.0.8

RUN apt update && apt-get install -y inetutils-ping iproute2
COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg

RUN groupadd -r haproxy && useradd -r -g haproxy haproxy
RUN mkdir /run/haproxy/
RUN mkdir /var/lib/haproxy
RUN chown haproxy /run/haproxy/
RUN chown haproxy /usr/local/etc/haproxy
RUN chown haproxy /var/lib/haproxy

EXPOSE 80
EXPOSE 1936
