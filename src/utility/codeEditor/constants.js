export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript:
    '\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n',
  typescript:
    '\nfunction greet(name: string): void {\n\tconsole.log(`Hello, ${name}!`);\n}\n\ngreet("Alex");\n',
  python: '\ndef greet(name):\n\tprint(f"Hello, {name}!")\n\ngreet("Alex")\n',
  java: '\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tgreet("Alex");\n\t}\n\n\tpublic static void greet(String name) {\n\t\tSystem.out.println("Hello, " + name + "!");\n\t}\n}\n',
  csharp:
    '\nusing System;\n\nclass Program {\n\tstatic void Main() {\n\t\tGreet("Alex");\n\t}\n\n\tstatic void Greet(string name) {\n\t\tConsole.WriteLine($"Hello, {name}!");\n\t}\n}\n',
  php: '\n<?php\nfunction greet($name) {\n\techo "Hello, $name!";\n}\n\ngreet("Alex");\n?>\n',
};
