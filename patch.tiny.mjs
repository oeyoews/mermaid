import fs from 'fs';
const oldStr = `globalThis["mermaid"] = globalThis.`;
const newStr = `module.exports=`;
const sourceFile = './packages/tiny/dist/mermaid.tiny.js';
const targetFile = './packages/tiny/dist/mermaid.tiny.tw.js';

// 读取文件内容
const content = fs.readFileSync(sourceFile, 'utf8');

// 检查文件是否包含目标字符串
if (!content.includes(oldStr)) {
  console.error(`错误：文件 ${sourceFile} 中未找到目标字符串`);
} else {
  console.log('开始替换');
  // 替换内容
  const newContent = content.replace(oldStr, newStr);

  // 写入新文件
  fs.writeFileSync(targetFile, newContent, 'utf8');

  console.log(`成功：已将替换后的内容写入 ${targetFile}`);
}
