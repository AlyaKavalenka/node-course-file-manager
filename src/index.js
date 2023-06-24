function welcome() {
  const name = process.argv.filter((item) => item.startsWith('--')).join().split('=').slice(1);

  console.log(`Welcome to the File Manager, ${name.length && name[0] ? name : 'Anonymous'}!`);
}

welcome();
