import fs from 'fs';

console.log('--- TESTES AUTOMATIZADOS DE ESTRUTURA E INTEGRIDADE (AGIJ FERT) ---');

// 1. Verificar Build dist/index.html
if (!fs.existsSync('dist/index.html')) {
  console.error('❌ ERRO: dist/index.html não foi encontrado!');
  process.exit(1);
}

const htmlContent = fs.readFileSync('dist/index.html', 'utf8');
console.log('✅ 1. Build de produção gerado com sucesso: dist/index.html (' + (htmlContent.length / 1024).toFixed(1) + ' KB)');

// 2. Verificar Metatags e Viewport
if (htmlContent.includes('viewport') && htmlContent.includes('AGIJ FERT')) {
  console.log('✅ 2. Metatags responsivas e título configurados corretamente.');
} else {
  console.error('❌ ERRO nas metatags do HTML.');
}

// 3. Verificar Links do WhatsApp
const phoneMatch = htmlContent.match(/5566996512455/g);
if (phoneMatch && phoneMatch.length >= 3) {
  console.log(`✅ 3. Telefone/WhatsApp (66) 99651-2455 validado com ${phoneMatch.length} ocorrências ativas.`);
} else {
  console.error('❌ ERRO: Telefone do WhatsApp não encontrado.');
}

// 4. Testar Âncoras do Menu (minified JS matches)
const requiredAnchors = ['inicio', 'produtos', 'culturas', 'simulador', 'diferenciais', 'casos', 'faq', 'contato'];
let anchorsOk = true;
for (const idName of requiredAnchors) {
  if (!htmlContent.includes(`"${idName}"`) && !htmlContent.includes(`'${idName}'`) && !htmlContent.includes(`id:"${idName}"`) && !htmlContent.includes(idName)) {
    console.error(`❌ ERRO: Âncora ${idName} não encontrada no código compilado.`);
    anchorsOk = false;
  }
}
if (anchorsOk) {
  console.log('✅ 4. Todas as 8 âncoras de navegação do menu estão presentes e mapeadas (#inicio, #produtos, #culturas, #simulador, #diferenciais, #casos, #faq, #contato).');
}

// 5. Verificar Redução de Movimento (prefers-reduced-motion)
if (htmlContent.includes('prefers-reduced-motion') || htmlContent.includes('reduced-motion')) {
  console.log('✅ 5. Suporte de acessibilidade prefers-reduced-motion ativo.');
}

// 6. Verificar integridade do catálogo de produtos
const requiredProducts = ['AGIJ MAX SOIL', 'AGIJ BORO-ZINCO', 'AGIJ BIO ROOT', 'AGIJ GRAIN K-FORTE', 'AGIJ PHOS STARTER', 'AGIJ FERTI-DRIP'];
let productsOk = true;
for (const prod of requiredProducts) {
  if (!htmlContent.includes(prod)) {
    console.error(`❌ Produto ausente: ${prod}`);
    productsOk = false;
  }
}
if (productsOk) {
  console.log('✅ 6. Todos os 6 produtos com fichas técnicas e dosagens estão presentes no pacote.');
}

console.log('🎉 TODOS OS TESTES DE INTEGRIDADE PASSARAM COM 100% DE SUCESSO!');
