# 🚀 Guia de Deploy no GitHub Pages

## Passo a Passo para Hospedar sua Landing Page

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Configure o repositório:
   - **Repository name:** `techstore-landing` (ou o nome que preferir)
   - **Description:** "Landing page da TechStore - Equipamentos Eletrônicos"
   - Marque como **Public**
   - ✅ **Initialize with README** (pode deixar desmarcado)
4. Clique em **"Create repository"**

### 2. Enviar os Arquivos

#### Opção A: Upload via Interface Web
1. No seu repositório recém-criado, clique em **"uploading an existing file"**
2. Arraste todos os arquivos da pasta para a área de upload:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `manifest.json`
   - `sw.js`
   - `README.md`
   - `404.html`
   - `_config.yml`
   - `.gitignore`
3. Adicione um commit message: "Initial commit - TechStore landing page"
4. Clique em **"Commit changes"**

#### Opção B: Via Git (se souber usar)
```bash
git init
git add .
git commit -m "Initial commit - TechStore landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/techstore-landing.git
git push -u origin main
```

### 3. Configurar GitHub Pages

1. No seu repositório, vá na aba **"Settings"**
2. Role para baixo até encontrar **"Pages"** no menu lateral
3. Em **"Source"**, selecione:
   - **Deploy from a branch**
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Clique em **"Save"**

### 4. Acessar o Site

Após alguns minutos, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/techstore-landing
```

⚠️ **Substitua "SEU-USUARIO" pelo seu nome de usuário do GitHub**

### 5. Configurar Domínio Personalizado (Opcional)

Se você quiser usar um domínio próprio:

1. Compre um domínio (ex: techstore.com.br)
2. No painel do seu provedor de domínio, configure:
   - **Tipo:** CNAME
   - **Nome:** www
   - **Valor:** seu-usuario.github.io
3. No GitHub, vá em Settings > Pages
4. Em **"Custom domain"**, digite: www.seudominio.com.br
5. ✅ Marque **"Enforce HTTPS"**

### 6. Verificar Funcionamento

Teste se tudo está funcionando:

- ✅ Site carrega corretamente
- ✅ Design está responsivo no mobile
- ✅ Botões de WhatsApp funcionam
- ✅ Formulário redireciona para WhatsApp
- ✅ Todas as seções estão visíveis

### 7. Atualizações Futuras

Para fazer alterações no site:

1. Edite os arquivos localmente
2. Faça upload dos arquivos atualizados no GitHub
3. Ou use o editor online do GitHub
4. As mudanças aparecerão automaticamente em alguns minutos

### 8. Personalização Necessária

Antes de usar em produção, personalize:

#### No arquivo `_config.yml`:
```yaml
url: "https://SEU-USUARIO.github.io"
```

#### No arquivo `README.md`:
- Substitua informações genéricas pelas específicas da loja

#### No arquivo `index.html`:
- Confirme se todas as informações estão corretas:
  - Endereço: Rua Abraão Tomé, 661
  - WhatsApp: (17) 98125-6580
  - Nome da loja: TechStore

### 9. SEO e Marketing

Para melhorar o posicionamento:

1. **Google Search Console:**
   - Adicione o site
   - Submeta o sitemap: `https://seu-site.com/sitemap.xml`

2. **Google My Business:**
   - Cadastre a loja
   - Adicione o link do site

3. **Redes Sociais:**
   - Compartilhe o link
   - Use as meta tags Open Graph já configuradas

### 🎯 Dicas Importantes

- **Performance:** O site já está otimizado para carregar rápido
- **Mobile:** Design 100% responsivo
- **WhatsApp:** Todos os botões já estão configurados
- **SEO:** Meta tags já incluídas
- **PWA:** Pode ser instalado como app no celular

### 📞 Suporte

Se tiver dúvidas:
- Consulte a [documentação do GitHub Pages](https://docs.github.com/en/pages)
- Entre em contato via WhatsApp: (17) 98125-6580

### 🔒 Backup

Sempre mantenha uma cópia local dos arquivos como backup!

---

**Sucesso com sua nova landing page! 🚀📱💰**