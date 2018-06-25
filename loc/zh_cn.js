module.exports = {
  _: {
    storage_is_encrypted: '您的信息已加密',
    enter_password: '请输入密码',
    bad_password: '密码错误请重试',
  },
  wallets: {
    list: {
      tabBarLabel: '钱包',
      app_name: 'Raichu',
      title: '我的钱包',
      header: '钱包由一组密钥构成并以地址的形式表示' + '分享地址以接受转账',
      add: '添加钱包',
    },
    add: {
      title: '添加钱包',
      description: '导入已有钱包(WIF格式)或创建新钱包(默认采用SegWit)',
      scan: '扫描二维码',
      create: '创建新钱包',
      label_new_segwit: '新的SegWit',
    },
    details: {
      title: '钱包细节',
      address: '地址',
      type: '类型',
      label: '标签',
      are_you_sure: '确认?',
      yes_delete: '删除',
      no_cancel: '取消',
      delete_this_wallet: '删除这个钱包',
      export_backup: '导出/备份',
    },
    export: {
      title: '导出钱包',
    },
    scanQrWif: {
      go_back: '返回',
      cancel: '取消',
      decoding: '解码中',
      input_password: '输入密码',
      password_explain: 'BIP38加密私钥',
      bad_password: '密码错误',
      wallet_already_exists: '钱包已存在',
      bad_wif: '错误的WIF',
      imported_wif: 'WIF已导入',
      with_address: ' 地址 ',
      imported_segwit: 'SegWit已导入',
      imported_legacy: '传统模式已导入',
    },
  },
  transactions: {
    list: {
      tabBarLabel: '转账',
      title: '我的转账',
      description: '待定的转入或转出',
      conf: '设置',
    },
    details: {
      title: '转账信息',
      from: '来自',
      to: '转给',
    },
  },
  send: {
    list: {
      tabBarLabel: '转出',
      header: '传出',
    },
    details: {
      title: '新建转账',
      amount_fiels_is_not_valid: '数额错误',
      fee_fiels_is_not_valid: '费用错误',
      address_fiels_is_not_valid: '地址错误',
      receiver_placeholder: '收款人',
      amount_placeholder: '转账金额(BTC)',
      fee_placeholder: '额外转账费用(BTC)',
      memo_placeholder: '备注',
      cancel: '取消',
      scan: '扫描',
      create: '新建',
      remaining_balance: '余额',
    },
    create: {
      title: '新建转账',
      error: '转账创建错误，错误的地址或金额',
      go_back: '返回',
      this_is_hex: '转账已经创建并可以广播到网络，继续？',
      to: '转给',
      amount: '数额',
      fee: '费用',
      tx_size: '转账数据大小',
      satoshi_per_byte: '聪/byte',
      memo: '备注',
      broadcast: '广播',
    },
  },
  receive: {
    list: {
      tabBarLabel: '收取',
      header: '收取',
    },
    details: {
      title: '分享地址以收取',
    },
  },
  settings: {
    tabBarLabel: '设置',
    header: '设置',
    plausible_deniability: '双重保护',
    storage_not_encrypted: '信息尚未加密',
    storage_encrypted: '信息已加密',
    password: '密码',
    password_explain: '此密码用来解锁钱包',
    retype_password: '请再次输入密码',
    passwords_do_not_match: '密码不匹配',
    encrypt_storage: '加密信息',
    about: '关于',
  },
  plausibledeniability: {
    title: '双重保护',
    help:
      '某些情况下您可能会被迫透露您的密码 ' +
      '为了保障您的财产安全，Raichu允许' +
      '您使用另外一个密码创建一个新的加密空间。迫不得已时， ' +
      '您可以告诉其他人这个密码. 当此密码被输入时 ' +
      '一个『虚假』的信息将会被呈现. 这可能 ' +
      '会骗过其他人以保障您的主要财产的安全。',
    help2:
      '新的加密空间也是完全可用的， ' +
      '您可以在其中存储较小的数额使其看起来更可信。',
    create_fake_storage: '创建新的『虚假』信息',
    go_back: '返回',
    create_password: '创建密码',
    create_password_explanation: '此密码应与主密码不同',
    password_should_not_match: '此密码应与主密码不同',
    retype_password: '请重新输入密码',
    passwords_do_not_match: '输入不相符',
    success: '成功',
  },
};
