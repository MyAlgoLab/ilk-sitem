import os
import subprocess

# Hedef dosya yolu (Bu betiğin ilk-sitem klasöründe çalıştırılacağını varsayıyoruz)
file_path = "netlify/functions/iller.js"

# Dosya kontrolü
if not os.path.exists(file_path):
    print(f"❌ Hata: '{file_path}' dosyası bulunamadı!")
    print("Lütfen bu betiği 'ilk-sitem' klasörünün içindeyken çalıştırdığınızdan emin olun.")
    exit(1)

print("==========================================")
# Başlık
print("  Yeni İl Ekleme ve Git Otomasyon Sistemi")
print("==========================================\n")

# Kullanıcıdan veri alma
plaka = input("Eklenecek plaka kodunu girin (Örn: 83): ").strip()
ad = input("Eklenecek il adını girin (Örn: Yapay Zeka Şehri): ").strip()

if not plaka or not ad:
    print("\n❌ Hata: Plaka kodu veya il adı boş bırakılamaz!")
    exit(1)

# Tek haneli plakaları '01' formatına getirme
if len(plaka) == 1 and plaka.isdigit():
    plaka = "0" + plaka

try:
    # 1. Dosyayı oku
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # 2. Şehirler dizisinin bittiği '];' kısmını bulup araya yeni ili ekleyelim
    # (JS syntax kurallarına uymak için son elemana virgül ekleyip yeni ili yerleştiriyoruz)
    target = "];"
    if target not in content:
        print("❌ Hata: Dosya yapısında '];' bulunamadı, dosya değiştirilemedi!")
        exit(1)

    new_city_string = f",\n    {{ plaka: \"{plaka}\", ad: \"{ad}\" }}\n];"
    
    # Sadece ilk eşleşen '];' kısmını yeni ilimizle değiştiriyoruz
    new_content = content.replace(target, new_city_string, 1)

    # 3. Güncellenen içeriği dosyaya geri yaz
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(new_content)

    print(f"\n✔ {plaka} - {ad} başarıyla '{file_path}' dosyasına kaydedildi.")

    # 4. Git otomasyonunu başlat
    print("\n🚀 Git işlemleri başlatılıyor...")

    # git add .
    print("-> git add .")
    subprocess.run(["git", "add", "."], check=True)

    # git commit -m "..."
    commit_message = f"{plaka} plaka kodu ({ad}) eklendi"
    print(f"-> git commit -m \"{commit_message}\"")
    subprocess.run(["git", "commit", "-m", commit_message], check=True)

    # git push origin main
    print("-> git push origin main")
    subprocess.run(["git", "push", "origin", "main"], check=True)

    print(f"\n🎉 Tebrikler! '{plaka} - {ad}' başarıyla buluta gönderildi ve API'niz güncelleniyor.")

except subprocess.CalledProcessError as ge:
    print(f"\n❌ Git komutları çalıştırılırken bir hata oluştu: {ge}")
except Exception as e:
    print(f"\n❌ Beklenmeyen bir hata oluştu: {e}")