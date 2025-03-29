import './index.scss'

import { Icon } from '@iconify/react'
import { Col, Row, Typography } from 'antd'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

import Button from '@/components/common/Button'
import PageLayout from '@/components/common/PageLayout'
import StatsCard from '@/components/common/StatsCard'
import ParticleBackground from '@/components/web3/ParticleBackground'

const { Title, Paragraph } = Typography

export default function Home() {
  const [walletBalance, setWalletBalance] = useState(0)
  const [cryptoPrice, setCryptoPrice] = useState({
    btc: 42350.75,
    eth: 2275.5,
    sol: 112.25
  })

  useEffect(() => {
    // 模拟余额增长动画
    const timer = setInterval(() => {
      setWalletBalance((prev) => {
        if (prev < 3.65) {
          return prev + 0.01
        }
        clearInterval(timer)
        return 3.65
      })
    }, 20)

    // 模拟价格波动
    const priceTimer = setInterval(() => {
      setCryptoPrice((prev) => ({
        btc: prev.btc + (Math.random() - 0.5) * 20,
        eth: prev.eth + (Math.random() - 0.5) * 5,
        sol: prev.sol + (Math.random() - 0.5) * 2
      }))
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(priceTimer)
    }
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  }

  // 对于自定义索引的动画，我们需要单独处理
  const featureVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        delay: index * 0.1 + 0.2
      }
    }),
    hover: {
      y: -10,
      boxShadow: '0 10px 25px rgba(108, 92, 231, 0.4)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        delay: index * 0.15 + 0.3
      }
    }),
    hover: {
      y: -5,
      boxShadow: '0 10px 30px rgba(108, 92, 231, 0.3)',
      borderColor: 'rgba(108, 92, 231, 0.5)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  }

  // Web3生态系统数据
  const web3Ecosystem = [
    {
      title: 'DeFi',
      icon: 'mdi:bank-outline',
      description: '去中心化金融平台，释放价值交换的全新可能',
      stats: '锁仓总值: $45.2B',
      color: '#6c5ce7'
    },
    {
      title: 'NFT',
      icon: 'mdi:palette-outline',
      description: '数字艺术与收藏品，重新定义所有权和创作价值',
      stats: '交易量: $2.5M/天',
      color: '#00cec9'
    },
    {
      title: 'DAO',
      icon: 'mdi:account-group-outline',
      description: '去中心化自治组织，社区驱动的决策与治理方式',
      stats: '活跃成员: 240万+',
      color: '#fd79a8'
    },
    {
      title: '元宇宙',
      icon: 'mdi:virtual-reality',
      description: '虚拟世界与现实交融的数字生活空间',
      stats: '用户增长: 187%/年',
      color: '#0984e3'
    }
  ]

  // 最新Web3技术趋势
  const web3Trends = [
    {
      title: 'Layer 2扩展方案',
      icon: 'mdi:layers-outline',
      description: '提升区块链性能与可扩展性的创新技术方案',
      topics: ['零知识证明', 'Rollups', '状态通道']
    },
    {
      title: '跨链技术',
      icon: 'mdi:vector-link',
      description: '连接不同区块链生态系统，实现资产与数据无缝流动',
      topics: ['跨链桥', '原子交换', '互操作性协议']
    },
    {
      title: '去中心化身份',
      icon: 'mdi:account-key-outline',
      description: '用户自主掌控个人数据的身份验证与隐私保护方案',
      topics: ['DID', '零知识证明', 'Soul Bound Token']
    }
  ]

  // 核心区块链项目
  const blockchainProjects = [
    {
      title: 'Ethereum',
      icon: 'cryptocurrency:eth',
      description: '智能合约平台的先驱，构建去中心化应用的基础设施',
      color: '#627eea'
    },
    {
      title: 'Solana',
      icon: 'cryptocurrency:sol',
      description: '高性能区块链，提供极速交易与低成本解决方案',
      color: '#14f195'
    },
    {
      title: 'Polkadot',
      icon: 'cryptocurrency:dot',
      description: '异构多链网络，实现跨链互操作性的新一代区块链',
      color: '#e6007a'
    },
    {
      title: 'Avalanche',
      icon: 'cryptocurrency:avax',
      description: '快速、低费用且环保的区块链平台，支持DeFi与企业应用',
      color: '#e84142'
    }
  ]

  // 快捷功能项
  const quickFeatures = [
    { title: '多链钱包', icon: 'mdi:wallet-outline', color: '#6c5ce7' },
    { title: '跨链交易', icon: 'mdi:swap-horizontal', color: '#00cec9' },
    { title: '资产追踪', icon: 'mdi:chart-line-variant', color: '#fd79a8' },
    { title: '安全保障', icon: 'mdi:shield-check', color: '#0984e3' }
  ]

  return (
    <PageLayout title="Web3 元宇宙" subtitle="探索去中心化未来的无限可能">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="home-container">
        <ParticleBackground />

        {/* 紧凑导航面板 */}
        <motion.div className="compact-header" variants={itemVariants}>
          <Row gutter={[16, 16]} className="dashboard-header-row">
            <Col xs={24} md={16}>
              <div className="welcome-panel">
                <motion.div
                  className="welcome-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="welcome-text">
                    <h2>
                      探索 <span className="gradient-text">Web3</span> 世界
                    </h2>
                    <p>掌控您的数字资产，参与去中心化经济，构建未来金融</p>

                    <div className="action-buttons">
                      <Button variant="primary" size="medium" className="glow-effect">
                        <Icon icon="mdi:rocket-launch" className="btn-icon" />
                        开始探索
                      </Button>
                      <Button variant="outline" size="medium">
                        <Icon icon="mdi:play-circle" className="btn-icon" />
                        观看演示
                      </Button>
                    </div>
                  </div>

                  <div className="crypto-visual">
                    <div className="crypto-icon-group">
                      {['eth', 'btc', 'sol'].map((coin, index) => (
                        <motion.div
                          key={coin}
                          className={`crypto-icon ${coin}`}
                          animate={{
                            y: [0, -10, 0],
                            rotate: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3 + index * 0.5,
                            ease: 'easeInOut',
                            delay: index * 0.2
                          }}
                        >
                          <div className="icon-backdrop"></div>
                          <div className="icon-glow"></div>
                          <div className="icon-container">
                            <Icon icon={`cryptocurrency:${coin}`} />
                          </div>
                          <div className="icon-label">
                            <span>{coin.toUpperCase()}</span>
                            <span className="price">
                              $
                              {coin === 'eth'
                                ? cryptoPrice.eth.toFixed(0)
                                : coin === 'btc'
                                  ? cryptoPrice.btc.toFixed(0)
                                  : cryptoPrice.sol.toFixed(0)}
                            </span>
                          </div>
                          <div className="icon-particles">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={i}
                                className="particle"
                                style={{
                                  animationDelay: `${i * 0.7}s`,
                                  left: `${10 + i * 20}%`,
                                  width: `${4 + (i % 3)}px`,
                                  height: `${4 + (i % 3)}px`
                                }}
                              ></div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="crypto-rings">
                      <div className="ring ring-1"></div>
                      <div className="ring ring-2"></div>
                      <div className="ring ring-3"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <motion.div
                className="account-summary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="balance-card">
                  <div className="balance-header">
                    <h3>总资产余额</h3>
                    <div className="balance-trend positive">
                      <Icon icon="mdi:trending-up" />
                      <span>+5.8%</span>
                    </div>
                  </div>

                  <motion.div
                    className="balance-amount"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.5,
                      type: 'spring',
                      stiffness: 300
                    }}
                  >
                    <div className="amount-decoration"></div>
                    <span className="amount-value">${(walletBalance * cryptoPrice.eth).toFixed(2)}</span>
                    <span className="amount-currency">USD</span>

                    <div className="balance-chart">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className="chart-bar"
                          style={{
                            height: `${20 + Math.random() * 30}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="wallet-assets"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="wallet-eth">
                      <div className="asset-icon eth">
                        <Icon icon="cryptocurrency:eth" />
                      </div>
                      <div className="asset-info">
                        <span className="asset-amount">{walletBalance.toFixed(2)} ETH</span>
                        <span className="asset-value">${(walletBalance * cryptoPrice.eth).toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="wallet-btc">
                      <div className="asset-icon btc">
                        <Icon icon="cryptocurrency:btc" />
                      </div>
                      <div className="asset-info">
                        <span className="asset-amount">0.018 BTC</span>
                        <span className="asset-value">${(0.018 * cryptoPrice.btc).toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* 快捷功能导航 */}
          <motion.div
            className="quick-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Row gutter={[16, 16]}>
              {quickFeatures.map((feature) => (
                <Col xs={12} sm={6} key={feature.title}>
                  <motion.div
                    className="feature-item"
                    whileHover={{
                      y: -5,
                      boxShadow: `0 10px 20px rgba(0,0,0,0.1), 0 0 15px ${feature.color}30`
                    }}
                    style={{ borderTop: `3px solid ${feature.color}` }}
                  >
                    <div className="feature-icon" style={{ color: feature.color }}>
                      <Icon icon={feature.icon} />
                    </div>
                    <div className="feature-title">{feature.title}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </motion.div>

        {/* 市场概览 */}
        <div className="market-overview">
          <motion.div
            className="market-ticker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="ticker-item">
              <Icon icon="cryptocurrency:btc" />
              <span className="ticker-name">Bitcoin</span>
              <span className="ticker-price">
                ${cryptoPrice.btc.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
              <span className="ticker-change positive">+2.4%</span>
            </div>
            <div className="ticker-item">
              <Icon icon="cryptocurrency:eth" />
              <span className="ticker-name">Ethereum</span>
              <span className="ticker-price">
                ${cryptoPrice.eth.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
              <span className="ticker-change positive">+3.8%</span>
            </div>
            <div className="ticker-item">
              <Icon icon="cryptocurrency:sol" />
              <span className="ticker-name">Solana</span>
              <span className="ticker-price">
                ${cryptoPrice.sol.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
              <span className="ticker-change positive">+5.2%</span>
            </div>
            <div className="ticker-item">
              <Icon icon="cryptocurrency:dot" />
              <span className="ticker-name">Polkadot</span>
              <span className="ticker-price">$13.45</span>
              <span className="ticker-change negative">-0.8%</span>
            </div>
            <div className="ticker-item">
              <Icon icon="cryptocurrency:avax" />
              <span className="ticker-name">Avalanche</span>
              <span className="ticker-price">$29.87</span>
              <span className="ticker-change positive">+1.5%</span>
            </div>
          </motion.div>
        </div>

        <Row gutter={[24, 24]} className="stats-section">
          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <StatsCard
                title="钱包余额"
                value={`${walletBalance.toFixed(2)} ETH`}
                trend={{ type: 'up', value: '2.3%' }}
                icon={<Icon icon="mdi:wallet-outline" />}
                variant="gradient"
              />
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <StatsCard
                title="总资产估值"
                value="$12,583.65"
                trend={{ type: 'up', value: '5.8%' }}
                icon={<Icon icon="mdi:chart-line" />}
              />
            </motion.div>
          </Col>

          <Col xs={24} md={8}>
            <motion.div variants={itemVariants}>
              <StatsCard
                title="DeFi收益率"
                value="8.7% APY"
                trend={{ type: 'up', value: '0.3%' }}
                icon={<Icon icon="mdi:percent" />}
              />
            </motion.div>
          </Col>
        </Row>

        <div className="section-divider">
          <motion.div
            className="divider-line"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="divider-icon"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Icon icon="mdi:cube-outline" />
          </motion.div>
        </div>

        <div className="section ecosystem-section">
          <Row gutter={[24, 24]}>
            <Col xs={24}>
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="section-header ecosystem-header">
                  <div className="header-decoration"></div>
                  <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className="gradient-text" data-text="Web3生态系统">
                      Web3生态系统
                    </span>
                    <div className="title-decoration">
                      <div className="decoration-line"></div>
                      <div className="decoration-dot"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paragraph className="section-subtitle">探索去中心化网络中相互连接的数字经济生态</Paragraph>
                  </motion.div>
                </div>
              </motion.div>
            </Col>

            <Col xs={24}>
              <div className="ecosystem-background">
                <div className="bg-element circle-1"></div>
                <div className="bg-element circle-2"></div>
                <div className="bg-element dots-1"></div>
                <div className="bg-element dots-2"></div>
                <div className="connection-lines">
                  <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="svg-lines">
                    <path className="path-line path-1" d="M100,150 C300,50 700,250 900,150" />
                    <path className="path-line path-2" d="M100,150 C300,250 700,50 900,150" />
                    <path className="path-line path-3" d="M500,50 C400,100 600,200 500,250" />
                  </svg>
                </div>
              </div>

              <Row gutter={[30, 30]} className="ecosystem-cards">
                {web3Ecosystem.map((item, index) => (
                  <Col xs={24} sm={12} lg={6} key={item.title}>
                    <motion.div
                      custom={index}
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className="ecosystem-card"
                    >
                      <div className="card-glass-effect"></div>
                      <div
                        className="card-glow"
                        style={{ background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)` }}
                      ></div>

                      <div className="ecosystem-icon-wrapper">
                        <div className="icon-background" style={{ borderColor: item.color }}></div>
                        <div className="ecosystem-icon" style={{ color: item.color }}>
                          <Icon icon={item.icon} width={36} height={36} />
                        </div>
                        <div
                          className="icon-glow"
                          style={{ background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)` }}
                        ></div>
                      </div>

                      <motion.h3
                        className="ecosystem-title"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item.title}
                        <div className="title-underline" style={{ background: item.color }}></div>
                      </motion.h3>

                      <motion.p
                        className="ecosystem-description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item.description}
                      </motion.p>

                      <motion.div
                        className="ecosystem-stats"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.6 + index * 0.1,
                          type: 'spring',
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                        style={{
                          background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                          borderColor: `${item.color}30`
                        }}
                      >
                        <div className="stats-icon" style={{ color: item.color }}>
                          <Icon
                            icon={
                              index === 0
                                ? 'mdi:chart-line'
                                : index === 1
                                  ? 'mdi:cash-multiple'
                                  : index === 2
                                    ? 'mdi:account-group'
                                    : 'mdi:chart-timeline-variant'
                            }
                          />
                        </div>
                        <span>{item.stats}</span>
                      </motion.div>

                      <div className="card-particles">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className="particle"
                            style={{
                              top: `${10 + i * 20}%`,
                              left: `${80 + (i % 3) * 5}%`,
                              background: `${item.color}`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <div className="section">
          <div className="section-header projects-header">
            <div className="section-title">
              <span className="gradient-text" data-text="核心区块链项目">
                核心区块链项目
              </span>
            </div>
            <Paragraph className="section-subtitle">驱动Web3创新的底层区块链技术平台</Paragraph>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="blockchain-projects"
          >
            {blockchainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="project-card"
              >
                <div
                  className="project-bg"
                  style={{
                    backgroundColor: project.color,
                    backgroundImage: `linear-gradient(45deg, ${project.color}99, #00000099)`
                  }}
                ></div>
                <div className="project-content">
                  <div className="project-icon">
                    <Icon icon={project.icon} width={30} height={30} />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-action">
                  <Icon icon="mdi:arrow-top-right" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="section-divider reverse">
          <motion.div
            className="divider-line"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="divider-icon"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: -360 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Icon icon="mdi:lightning-bolt" />
          </motion.div>
        </div>

        <Row gutter={[24, 24]} className="section trends-section">
          <Col xs={24} lg={15}>
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="section-header trends-header">
                <div className="section-title">
                  <span className="gradient-text" data-text="最新技术趋势">
                    最新技术趋势
                  </span>
                </div>
                <Paragraph className="section-subtitle">引领区块链和去中心化技术发展的前沿创新领域</Paragraph>
              </div>

              <Row gutter={[24, 24]}>
                {web3Trends.map((trend, index) => (
                  <Col xs={24} md={index === 2 ? 24 : 12} key={trend.title}>
                    <motion.div
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                      className="trend-card"
                    >
                      <div className="trend-header">
                        <div className="trend-icon">
                          <Icon icon={trend.icon} width={32} height={32} />
                        </div>
                        <h3 className="trend-title">{trend.title}</h3>
                      </div>
                      <p className="trend-description">{trend.description}</p>
                      <div className="trend-topics">
                        {trend.topics.map((topic) => (
                          <span key={topic} className="topic-tag">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>

          <Col xs={24} lg={9}>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="trends-action"
            >
              <div className="action-card">
                <div className="action-content">
                  <h3 className="action-title">
                    探索{' '}
                    <span className="gradient-text" data-text="Web3">
                      Web3
                    </span>{' '}
                    未来技术
                  </h3>
                  <p className="action-description">加入我们的开发者社区，获取前沿技术资讯，参与创新项目开发与测试</p>
                  <Button variant="primary" size="large" className="action-button glow-effect">
                    <Icon icon="mdi:rocket-launch" style={{ marginRight: 8 }} />
                    加入社区
                  </Button>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="cta-banner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <Title level={2}>
              准备好加入 <span className="gradient-text">Web3 革命</span> 了吗？
            </Title>
            <Paragraph>创建您的数字身份，掌控您的数据和资产，参与去中心化的数字经济生态</Paragraph>
            <Button variant="primary" size="large" className="glow-effect">
              <Icon icon="mdi:account-plus" style={{ marginRight: 8 }} />
              创建账户
            </Button>
          </div>
          <div className="cta-circle-1"></div>
          <div className="cta-circle-2"></div>
        </motion.div>
      </motion.div>
    </PageLayout>
  )
}
