Install using...

```
curl https://rclone.org/install.sh | sudo bash
```

Overwrite the config file `/home/pi/.config/rclone/rclone.conf` with the following:

```
[GDrive]
type = drive
scope = drive
service_account_file = /home/pi/auth/regieki-8978bae00f46.json
root_folder_id = 0AGe6jKP9rYlSUk9PVA
```

`/home/pi/auth/regieki-8978bae00f46.json` should contain:

```
{
  "type": "service_account",
  "project_id": "regieki",
  "private_key_id": "8978bae00f46e7cc5e632de5cbff54988e297925",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDi/axSgpmPsEbd\nzs6gG8x6tKxGGXkgGJemcNR8lZGMlH4KeLHNWM9bNTp43mg5RGPgXnovAnTvdCsb\nTEI0jBmynO/WViIkf4s+/reLJS1hy9oDthSxp3nrwtvDzT/IkwX9PE+BXKr8VQ8G\nLolZmEvaFSa3lg8k4AQPJ5NYxUQUjHZ09bwvIrk+ka9wwCfQFYYS/4DsxfsowpPE\nMjjjsrqXEUgN/Ms5Qm+cAavBt8zXoWelsBQpSCkUWEY9ClUomY1NjBi8pCMnjRCS\n3dPUB3ChlOMk7Gvd06Qn9S6t1dBQjMdxr+qNnb8QOQy02+fCh2h4Bckul62zY7O1\nNmHJvpVlAgMBAAECggEAMu5BqcLBc17VS8PxEzYhj3+17sWc6qFx92e2GZ0SqxUP\nYciadm2AmyGqlL+saXsJoOh56E3YEHlDicy2xyUPSAcT/kbVwtQ2WWRcKPWmxNxx\nNqd2ZbUi804Fst18/ANXEu6jFS7Gc7cfF5899LMqA8z+oq8iBz9XUdIqqr6aS7Sb\nVr0j40iBAPDkEpcjokZswzVMs4mOtJxKs4spEDxBAv/tQXAAV4jPXho/4j+EJ/T+\noN7golr8e/+iaR2iz2xwG6KBLp/i1vUN8G6H89sNx624xRPEgmVs+5KkTyFJddit\nmPjsg6d9E9W83/Ujp5nWdrMKoIP9miF3spotfqqd6QKBgQD1kJWccnKALYXjl3bE\nATIpo/wF3mjuy5UrfpoVwqFQueni66Dxo7w6qWQQIWrkXm4Se3bgwcJtaV1dWyt6\nF5tOBhs+u2ozAtkUA7B9oNruKfwlqJWVuNe5Y2uZwR3bdDPGo+VPN7UpYMdFy1PT\n8Rlw1WXPIDabvMVrnvqmg8XNCQKBgQDsowem38HMCGiVXvTNfRtSnwTOLOzn+bw6\nZZGmf11SmcAWgvsCjU8J0DDlQTHnTZm927zYhgjWP3QfshOkYw+RpU9eLtZtSND1\nHxMTpV2wTC1+xIfeT5puZB0WunTFs2uVkGbAWu099Vid6ggls7ZCLDX5ba4iig6J\nIH5zfjO4fQKBgQC6hSbOnTORXoKLG3nvaQUkEdWU05maf/H/BnudOadz/LLFVLp7\nsCWB3TYO9oMNkRhEW5kxIJtApb5v8Zb1dsbVHdhF7u68blZaWG8PDUYdjrBiHkn4\nXl0lCHorYD8AeKP3Jng/ko29LzBNOCKlIkVzqfNZvxsbcef2VdwG7KIqmQKBgHiM\nTNeb4XP5TJ3bc8ZC12pti9skU8ORG2x8VYiGFZqArLRLIWgZaIxNPLttTOjSRWHM\n0RVUoqfSR2vmIc96j3HYzufh4GZn09sra2J0uZeYFw0fPT/pOXjHE3KCpf4Y+tOE\nbnPLXlRT6kL3+BKMzGpFb3GTiEQcJG+C2CgpwFtZAoGBAIb3vZ0MyzZXnPF+7LyZ\n4XgqikslNOgvZeSEUdV5a5WZmC6cX0fwrBAkp2rodf+uuikAt7ndKkzrT3g4du3k\nrMOdAAWJF5fGI8lFtAVlOI2hLNF1P3CEBshUa5UvSZeQqfm1y425ki966sYYqy32\nJ3NfeVHhru4zLRqxN66xan7c\n-----END PRIVATE KEY-----\n",
  "client_email": "regiedata@regieki.iam.gserviceaccount.com",
  "client_id": "109797307578222625540",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/regiedata%40regieki.iam.gserviceaccount.com"
}
```

Everything should be synced to a `Data` folder onwed by `regiedevice@gmail.com` and shared with the service acount.

Example ls:
```rclone--drive-shared-with-me ls GDrive:Data ```

Example mkdir:
```rclone--drive-shared-with-me mkdir GDrive:Data/lilac/SESSION_001```

Example sync:
```rclone--drive-shared-with-me sync ~/pdac/usb/recordings/SESSION_001 GDrive:Data/lilac/SESSION_001```
