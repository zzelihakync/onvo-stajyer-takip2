# ONVO Dijital Stajyer Takip Sistemi

Bir şirketin staj sürecini uçtan uca dijitalleştiren web uygulamasının frontend'i. Stajyerler, mühendisler (staj sorumluları) ve yetkililer (İK / yönetim) için ayrı paneller sunar: devam takibi, QR ile giriş, günlük raporlar, belgeler, duyurular ve bildirimler tek bir yerde.

## Özellikler

**Stajyer paneli**
- QR kod ile giriş / devam kaydı
- Günlük rapor yazma ve geçmiş raporlar
- Devamsızlık bildirimi, belgeler, duyurular ve bildirimler
- Profil ve ayarlar, geri bildirim

**Mühendis paneli**
- Sorumlu olunan stajyerlerin listesi ve takibi
- Rapor ve devamsızlık inceleme
- Duyurular, profil ve ayarlar

**Yetkili paneli**
- Genel bakış (dashboard)
- Stajyer yönetimi ve stajyer detay sayfası
- Departman yönetimi
- Devam takibi, raporlar, belgeler (kütüphane)
- Duyuru ve bildirim yönetimi, sistem ayarları

**Genel sayfalar:** Giriş (stajyer / yetkili), kayıt, hakkımızda, iletişim, SSS, yardım.

## Teknolojiler

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Material UI (MUI) ve Emotion
- `qrcode` ile QR kod üretimi

> Bu depo uygulamanın arayüz (frontend) kısmıdır; veriler şimdilik `app/data` altındaki örnek verilerden gelir.

## Kurulum

```bash
npm install
npm run dev
```

Ardından tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje yapısı

```
app/
  login/        Stajyer ve yetkili giriş ekranları
  dashboard/    Stajyer ana sayfası (ve diğer stajyer sayfaları: attendance, daily-report, documents ...)
  engineer/     Mühendis paneli
  yetkili/      Yetkili (yönetim) paneli
  data/         Örnek veriler
public/         Logo ve görseller
```

## Ekip

Bu proje ONVO staj programı kapsamında ekip olarak geliştirildi.

- **Zeliha Koyuncu** ([@zzelihakync](https://github.com/zzelihakync)): giriş sistemi, mühendis paneli, yetkili paneli sayfaları, stajyer detay sayfası
- **Tuğba Karaca** ([@TugbaKaraca](https://github.com/TugbaKaraca)): ilk proje kurulumu, stajyer sayfaları, QR giriş sistemi, tasarım güncellemeleri
