ARG JITSI_REPO=jitsi
ARG BASE_TAG=latest
FROM ${JITSI_REPO}/base-java:${BASE_TAG}

RUN apt-dpkg-wrap apt-get update && \
    apt-dpkg-wrap apt-get install -y jitsi-videobridge2 jq curl iproute2 dnsutils && \
    apt-cleanup

# To bind the port number less than 1024 with non-root access.
RUN setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/jvm/java-11-openjdk-amd64/bin/java

COPY rootfs/ /

VOLUME /config
