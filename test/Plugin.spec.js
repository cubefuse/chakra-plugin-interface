/* eslint-env mocha */
'use strict'
const Plugin = require('../dist/plugin-interface.min')
const MockPlugin = require('./mocks/MockPlugin')

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('Plugin', () => {
  let plugin

  beforeEach((done) => {
    plugin = new MockPlugin()
    done()
  })

  it('exports plugin interface', () => {
    expect(Plugin).to.exist()
  })

  it('new plugins can be created successfully', () => {
    expect(plugin).to.exist()
    expect(plugin instanceof Plugin).to.be.eql(true)
  })
})
