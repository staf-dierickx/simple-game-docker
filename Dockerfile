FROM cm2network/steamcmd:root

########################
# ENVIRONMENT SETTINGS #
########################
# timezone for cronjobs
ENV TZ=Europe/Brussels \
    UPDATE_ON_START="true" \
    PRE_UPDATE_BACKUP="true" \
    ENABLE_RCON="true" \
    RCON_PORT="25575" \
    RCON_PASSWORD="Ch@ngeM3"

# copy over etc
ADD ./etc /app/etc
# isntall packages
RUN apt update && \
    apt install --no-install-recommends -y nodejs npm
    
# install nodejs apps
WORKDIR /app/etc/node
RUN npm install && npm install -g pm2
RUN ln -s /app/etc/node/rcon.js /usr/bin/rcon && \
    chmod u+x /app/etc/node/rcon.js

WORKDIR /app/container
CMD ["bash", "/app/etc/startup.sh"]