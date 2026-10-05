# Une seule image : on construit le front React,
# puis le backend Express sert à la fois l'API et le site.
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"] 
