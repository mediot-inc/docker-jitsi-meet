ARG JITSI_REPO=jitsi
ARG BASE_TAG=latest
FROM ${JITSI_REPO}/base-java:${BASE_TAG}

LABEL org.opencontainers.image.title="Jitsi Videobridge (jvb)"
LABEL org.opencontainers.image.description="WebRTC compatible server designed to route video streams amongst participants in a conference."
LABEL org.opencontainers.image.url="https://jitsi.org/jitsi-videobridge/"
LABEL org.opencontainers.image.source="https://github.com/jitsi/docker-jitsi-meet"
LABEL org.opencontainers.image.documentation="https://jitsi.github.io/handbook/"

RUN apt-dpkg-wrap apt-get update && \
    apt-dpkg-wrap apt-get install -y jitsi-videobridge2 jitsi-autoscaler-sidecar jq curl iproute2 dnsutils libpcap0.8 && \
    apt-cleanup

# To bind the port number less than 1024 with non-root access.
RUN setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/jvm/java-11-openjdk-amd64/bin/java

COPY rootfs/ /

VOLUME /config
