npm run build
gcloud builds submit --tag gcr.io/trustpluscom/trustplus-frontend
gcloud run deploy trustplus-frontend \
  --image gcr.io/trustpluscom/trustplus-frontend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
  --set-env-vars NEXT_PUBLIC_API_KEY=7f20c8c0852433d7fc8cc180860b717659bdabb8e775c1d9b37e2d930842a082
