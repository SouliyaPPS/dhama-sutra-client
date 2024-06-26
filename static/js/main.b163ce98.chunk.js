(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    107: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6),
        c = a(1),
        r = a(12),
        s = a(5),
        o = a(26),
        i = a(30),
        l = a(53),
        u = a(68),
        d = a(0);
      t.default = function () {
        var e = Object(s.c)(function (e) {
            return e;
          }),
          t = e.categories,
          a = e.blogsCategory,
          b = Object(s.b)(),
          j = Object(r.h)().slug,
          p = Object(c.useState)(''),
          f = Object(n.a)(p, 2),
          O = f[0],
          m = f[1],
          h = Object(c.useState)(),
          x = Object(n.a)(h, 2),
          v = x[0],
          g = x[1],
          y = Object(c.useState)(0),
          w = Object(n.a)(y, 2),
          _ = w[0],
          k = w[1],
          N = Object(r.f)(),
          S = N.location.search;
        Object(c.useEffect)(
          function () {
            var e = t.find(function (e) {
              return e.name === j;
            });
            e && m(e._id);
          },
          [j, t]
        ),
          Object(c.useEffect)(
            function () {
              if (O)
                if (
                  a.every(function (e) {
                    return e.id !== O;
                  })
                )
                  b(Object(o.c)(O, S));
                else {
                  var e = a.find(function (e) {
                    return e.id === O;
                  });
                  if (!e) return;
                  g(e.blogs), k(e.total), e.search && N.push(e.search);
                }
            },
            [O, a, b, S, N]
          );
        return v
          ? Object(d.jsxs)('div', {
              className: 'blogs_category',
              children: [
                Object(d.jsx)('div', {
                  className: 'show_blogs',
                  children: v.map(function (e) {
                    return Object(d.jsx)(u.a, { blog: e }, e._id);
                  }),
                }),
                _ > 1 &&
                  Object(d.jsx)(l.a, {
                    total: _,
                    callback: function (e) {
                      var t = '?page='.concat(e);
                      b(Object(o.c)(O, t));
                    },
                  }),
              ],
            })
          : Object(d.jsx)(i.a, {});
      };
    },
    108: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(4),
        c = a(6),
        r = a(1),
        s = a(5),
        o = a(57),
        i = a(42),
        l = a(0);
      t.default = function () {
        var e,
          t = Object(r.useState)(''),
          a = Object(c.a)(t, 2),
          u = a[0],
          d = a[1],
          b = Object(r.useState)(null),
          j = Object(c.a)(b, 2),
          p = j[0],
          f = j[1],
          O = Object(s.c)(function (e) {
            return e;
          }),
          m = O.auth,
          h = O.categories,
          x = Object(s.b)();
        Object(r.useEffect)(
          function () {
            p && d(p.name);
          },
          [p]
        );
        return 'admin' !==
          (null === (e = m.user) || void 0 === e ? void 0 : e.role)
          ? Object(l.jsx)(i.a, {})
          : Object(l.jsxs)('div', {
              className: 'category',
              children: [
                Object(l.jsxs)('form', {
                  onSubmit: function (e) {
                    if ((e.preventDefault(), m.access_token && u)) {
                      if (p) {
                        if (p.name === u) return;
                        var t = Object(n.a)(
                          Object(n.a)({}, p),
                          {},
                          { name: u }
                        );
                        x(Object(o.d)(t, m.access_token));
                      } else x(Object(o.a)(u, m.access_token));
                      d(''), f(null);
                    }
                  },
                  children: [
                    Object(l.jsx)('label', {
                      htmlFor: 'category',
                      children: '\u0edd\u0ea7\u0e94\u0e97\u0eb1\u0ea1',
                    }),
                    Object(l.jsxs)('div', {
                      className: 'd-flex align-items-center',
                      children: [
                        p &&
                          Object(l.jsx)('i', {
                            className: 'fas fa-times me-2 text-danger',
                            style: { cursor: 'pointer' },
                            onClick: function () {
                              return f(null);
                            },
                          }),
                        Object(l.jsx)('input', {
                          type: 'text',
                          name: 'category',
                          id: 'category',
                          value: u,
                          onChange: function (e) {
                            return d(e.target.value);
                          },
                        }),
                        Object(l.jsx)('button', {
                          type: 'submit',
                          children: p
                            ? '\u0ec0\u0ec0\u0e81\u0ec9\u0ec4\u0e82'
                            : '\u0ec0\u0e9e\u0eb5\u0ec9\u0ea1',
                        }),
                      ],
                    }),
                  ],
                }),
                Object(l.jsx)('div', {
                  children: h.map(function (e) {
                    return Object(l.jsxs)(
                      'div',
                      {
                        className: 'category_row',
                        children: [
                          Object(l.jsx)('p', {
                            className: 'm-0 text-capitalize',
                            children: e.name,
                          }),
                          Object(l.jsxs)('div', {
                            children: [
                              Object(l.jsx)('i', {
                                className: 'fas fa-edit mx-2',
                                onClick: function () {
                                  return f(e);
                                },
                              }),
                              Object(l.jsx)('i', {
                                className: 'fas fa-trash-alt',
                                onClick: function () {
                                  return (
                                    (t = e._id),
                                    void (
                                      m.access_token &&
                                      window.confirm(
                                        'Are you sure to delete this category?'
                                      ) &&
                                      x(Object(o.b)(t, m.access_token))
                                    )
                                  );
                                  var t;
                                },
                              }),
                            ],
                          }),
                        ],
                      },
                      e._id
                    );
                  }),
                }),
              ],
            });
      };
    },
    109: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6),
        c = a(1),
        r = a(5),
        s = a(21),
        o = a(0);
      t.default = function () {
        var e = Object(c.useState)(''),
          t = Object(n.a)(e, 2),
          a = t[0],
          i = t[1],
          l = Object(r.b)();
        return Object(o.jsxs)('div', {
          className: 'my-4',
          style: { maxWidth: '500px' },
          children: [
            Object(o.jsx)('h2', {
              children:
                '\u0ea5\u0eb7\u0ea1\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99?',
            }),
            Object(o.jsxs)('form', {
              className: 'form-group',
              onSubmit: function (e) {
                e.preventDefault(), l(Object(s.b)(a));
              },
              children: [
                Object(o.jsx)('label', {
                  htmlFor: 'account',
                  children: '\u0ead\u0eb5\u0ec0\u0ea1\u0ea7',
                }),
                Object(o.jsxs)('div', {
                  className: 'd-flex align-items-center',
                  children: [
                    Object(o.jsx)('input', {
                      type: 'text',
                      className: 'form-control',
                      id: 'account',
                      name: 'account',
                      onChange: function (e) {
                        return i(e.target.value);
                      },
                    }),
                    Object(o.jsxs)('button', {
                      className:
                        'btn btn-primary mx-2 d-flex align-items-center',
                      type: 'submit',
                      children: [
                        Object(o.jsx)('i', {
                          className: 'fas fa-paper-plane me-2',
                        }),
                        ' \u0eaa\u0ebb\u0ec8\u0e87',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    110: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6),
        c = a(1),
        r = a(12),
        s = a(5),
        o = a(46),
        i = a(0);
      t.default = function () {
        var e = Object(r.h)().slug,
          t = Object(s.b)(),
          a = Object(c.useState)(''),
          l = Object(n.a)(a, 2),
          u = l[0],
          d = l[1],
          b = Object(c.useState)(''),
          j = Object(n.a)(b, 2),
          p = j[0],
          f = j[1],
          O = Object(c.useState)(!1),
          m = Object(n.a)(O, 2),
          h = m[0],
          x = m[1],
          v = Object(c.useState)(!1),
          g = Object(n.a)(v, 2),
          y = g[0],
          w = g[1];
        return Object(i.jsx)('div', {
          className: 'auth_page',
          children: Object(i.jsxs)('form', {
            className: 'auth_box',
            onSubmit: function (a) {
              a.preventDefault(), t(Object(o.b)(u, p, e));
            },
            children: [
              Object(i.jsx)('h3', {
                className: 'text-uppercase text-center mb-4',
                children: 'Reset Password',
              }),
              Object(i.jsxs)('div', {
                className: 'form-group my-2',
                children: [
                  Object(i.jsx)('label', {
                    htmlFor: 'password',
                    className: 'form-label',
                    children:
                      '\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                  }),
                  Object(i.jsxs)('div', {
                    className: 'pass',
                    children: [
                      Object(i.jsx)('input', {
                        type: h ? 'text' : 'password',
                        className: 'form-control',
                        id: 'password',
                        name: 'password',
                        value: u,
                        onChange: function (e) {
                          return d(e.target.value);
                        },
                      }),
                      Object(i.jsx)('small', {
                        onClick: function () {
                          return x(!h);
                        },
                        children: h ? 'Hide' : 'Show',
                      }),
                    ],
                  }),
                ],
              }),
              Object(i.jsxs)('div', {
                className: 'form-group my-2',
                children: [
                  Object(i.jsx)('label', {
                    htmlFor: 'password',
                    className: 'form-label',
                    children:
                      '\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                  }),
                  Object(i.jsxs)('div', {
                    className: 'pass',
                    children: [
                      Object(i.jsx)('input', {
                        type: y ? 'text' : 'password',
                        className: 'form-control',
                        id: 'password',
                        name: 'password',
                        value: p,
                        onChange: function (e) {
                          return f(e.target.value);
                        },
                      }),
                      Object(i.jsx)('small', {
                        onClick: function () {
                          return w(!y);
                        },
                        children: y ? 'Hide' : 'Show',
                      }),
                    ],
                  }),
                ],
              }),
              Object(i.jsx)('button', {
                type: 'submit',
                className: 'btn btn-dark w-100 mt-2',
                children:
                  '\u0eaa\u0eb0\u0ea1\u0eb1\u0e81\u0eaa\u0eb0\u0ea1\u0eb2\u0e8a\u0eb4\u0e81',
              }),
            ],
          }),
        });
      };
    },
    111: function (e, t, a) {
      'use strict';
      a.r(t);
      a(1);
      var n = a(12),
        c = a(67),
        r = a(0);
      t.default = function () {
        var e = Object(n.h)().slug;
        return Object(r.jsx)(c.default, { id: e });
      };
    },
    112: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6),
        c = a(1),
        r = a(12),
        s = a(5),
        o = a(9),
        i = a(30),
        l = a(47),
        u = a(2),
        d = a(7),
        b = a(15),
        j = a(8),
        p = a(70),
        f = a.n(p),
        O = (a(106), a(0)),
        m = [
          [{ font: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block', 'link'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
        ],
        h = function (e) {
          var t = e.body,
            a = e.setBody,
            n = { toolbar: { container: m } };
          return Object(O.jsx)('div', {
            children: Object(O.jsx)(f.a, {
              theme: 'snow',
              modules: n,
              placeholder: 'Write somethings...',
              onChange: function (e) {
                return a(e);
              },
              value: t,
            }),
          });
        },
        x = function (e) {
          var t = e.callback,
            a = e.edit,
            r = e.setEdit,
            s = Object(c.useState)(''),
            o = Object(n.a)(s, 2),
            i = o[0],
            l = o[1],
            u = Object(c.useRef)(null);
          Object(c.useEffect)(
            function () {
              a && l(a.content);
            },
            [a]
          );
          return Object(O.jsxs)('div', {
            children: [
              Object(O.jsx)(h, { body: i, setBody: l }),
              Object(O.jsx)('div', {
                ref: u,
                dangerouslySetInnerHTML: { __html: i },
                style: { display: 'none' },
              }),
              Object(O.jsx)('button', {
                className: 'btn btn-dark ms-auto d-block px-4 mt-2',
                onClick: function () {
                  var e = u.current;
                  if (
                    !(null === e || void 0 === e ? void 0 : e.innerText).trim()
                  )
                    return r ? r(void 0) : void 0;
                  t(i), l('');
                },
                children: a
                  ? '\u0ec0\u0ec0\u0e81\u0ec9\u0ec4\u0e82'
                  : '\u0eaa\u0ebb\u0ec8\u0e87',
              }),
            ],
          });
        },
        v = function (e) {
          var t = e.user;
          return Object(O.jsxs)('div', {
            className: 'avatar_comment',
            children: [
              Object(O.jsx)('img', { src: t.avatar, alt: 'avatar' }),
              Object(O.jsx)('small', {
                className: 'd-block text-break',
                children: Object(O.jsx)(j.b, {
                  to: '/profile/'.concat(t._id),
                  children: t.name,
                }),
              }),
            ],
          });
        },
        g = function (e) {
          var t = e.user,
            a = e.reply_user;
          return Object(O.jsxs)('div', {
            className: 'avatar_reply',
            children: [
              Object(O.jsx)('img', { src: t.avatar, alt: 'avatar' }),
              Object(O.jsxs)('div', {
                className: 'ms-1',
                children: [
                  Object(O.jsx)('small', {
                    children: Object(O.jsx)(j.b, {
                      to: '/profile/'.concat(t._id),
                      style: { textDecoration: 'none' },
                      children: t.name,
                    }),
                  }),
                  Object(O.jsxs)('small', {
                    className: 'reply-text',
                    children: [
                      '\u0e95\u0ead\u0e9a\u0e81\u0eb1\u0e9a ',
                      Object(O.jsx)(j.b, {
                        to: '/profile/'.concat(
                          null === a || void 0 === a ? void 0 : a._id
                        ),
                        children: null === a || void 0 === a ? void 0 : a.name,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        y = a(4),
        w = a(3),
        _ = a(18),
        k = a(19),
        N = function (e, t) {
          return (function () {
            var a = Object(d.a)(
              Object(u.a)().mark(function a(n) {
                var c;
                return Object(u.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            4,
                            (a.next = 4),
                            Object(o.b)(
                              'comments/blog/'
                                .concat(e, '?page=')
                                .concat(t, '&limit=')
                                .concat(4)
                            )
                          );
                        case 4:
                          (c = a.sent),
                            n({
                              type: _.d,
                              payload: {
                                data: c.data.comments,
                                total: c.data.total,
                              },
                            }),
                            (a.next = 11);
                          break;
                        case 8:
                          (a.prev = 8),
                            (a.t0 = a.catch(0)),
                            n({
                              type: w.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 11:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        S = function (e) {
          var t,
            a,
            r = e.children,
            i = e.comment,
            l = e.showReply,
            j = e.setShowReply,
            p = Object(c.useState)(!1),
            f = Object(n.a)(p, 2),
            m = f[0],
            h = f[1],
            v = Object(s.c)(function (e) {
              return e;
            }).auth,
            g = Object(s.b)(),
            N = Object(c.useState)(),
            S = Object(n.a)(N, 2),
            C = S[0],
            E = S[1],
            T = function (e) {
              var t, a;
              v.user &&
                v.access_token &&
                g(
                  ((t = e),
                  (a = v.access_token),
                  (function () {
                    var e = Object(d.a)(
                      Object(u.a)().mark(function e(n) {
                        var c, r;
                        return Object(u.a)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), Object(k.a)(a, n);
                                case 2:
                                  return (
                                    (c = e.sent),
                                    (r = c || a),
                                    (e.prev = 4),
                                    n({
                                      type: t.comment_root ? _.c : _.b,
                                      payload: t,
                                    }),
                                    (e.next = 8),
                                    Object(o.a)('comment/'.concat(t._id), r)
                                  );
                                case 8:
                                  e.next = 13;
                                  break;
                                case 10:
                                  (e.prev = 10),
                                    (e.t0 = e.catch(4)),
                                    n({
                                      type: w.a,
                                      payload: {
                                        errors: e.t0.response.data.msg,
                                      },
                                    });
                                case 13:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[4, 10]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })())
                );
            },
            A = function (e) {
              return Object(O.jsxs)('div', {
                children: [
                  Object(O.jsx)('i', {
                    className: 'fas fa-trash-alt mx-2',
                    onClick: function () {
                      return T(e);
                    },
                  }),
                  Object(O.jsx)('i', {
                    className: 'fas fa-edit me-2',
                    onClick: function () {
                      return E(e);
                    },
                  }),
                ],
              });
            };
          return Object(O.jsxs)('div', {
            className: 'w-100',
            children: [
              C
                ? Object(O.jsx)(x, {
                    callback: function (e) {
                      if (v.user && v.access_token && C) {
                        if (e === C.content) return E(void 0);
                        var t,
                          a,
                          n = Object(y.a)(
                            Object(y.a)({}, C),
                            {},
                            { content: e }
                          );
                        g(
                          ((t = n),
                          (a = v.access_token),
                          (function () {
                            var e = Object(d.a)(
                              Object(u.a)().mark(function e(n) {
                                var c, r;
                                return Object(u.a)().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2), Object(k.a)(a, n)
                                          );
                                        case 2:
                                          return (
                                            (c = e.sent),
                                            (r = c || a),
                                            (e.prev = 4),
                                            n({
                                              type: t.comment_root ? _.g : _.f,
                                              payload: t,
                                            }),
                                            (e.next = 8),
                                            Object(o.c)(
                                              'comment/'.concat(t._id),
                                              { data: t },
                                              r
                                            )
                                          );
                                        case 8:
                                          e.next = 13;
                                          break;
                                        case 10:
                                          (e.prev = 10),
                                            (e.t0 = e.catch(4)),
                                            n({
                                              type: w.a,
                                              payload: {
                                                errors: e.t0.response.data.msg,
                                              },
                                            });
                                        case 13:
                                        case 'end':
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[4, 10]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })())
                        ),
                          E(void 0);
                      }
                    },
                    edit: C,
                    setEdit: E,
                  })
                : Object(O.jsxs)('div', {
                    className: 'comment_box',
                    children: [
                      Object(O.jsx)('div', {
                        className: 'p-2',
                        dangerouslySetInnerHTML: { __html: i.content },
                      }),
                      Object(O.jsxs)('div', {
                        className: 'd-flex justify-content-between p-2',
                        children: [
                          Object(O.jsx)('small', {
                            style: { cursor: 'pointer' },
                            onClick: function () {
                              return h(!m);
                            },
                            children: m ? '- Cancel -' : '- Reply -',
                          }),
                          Object(O.jsxs)('small', {
                            className: 'd-flex',
                            children: [
                              Object(O.jsx)('div', {
                                className: 'comment_nav',
                                children:
                                  i.blog_user_id ===
                                  (null === (t = v.user) || void 0 === t
                                    ? void 0
                                    : t._id)
                                    ? i.user._id === v.user._id
                                      ? A(i)
                                      : Object(O.jsx)('i', {
                                          className: 'fas fa-trash-alt mx-2',
                                          onClick: function () {
                                            return T(i);
                                          },
                                        })
                                    : i.user._id ===
                                        (null === (a = v.user) || void 0 === a
                                          ? void 0
                                          : a._id) && A(i),
                              }),
                              Object(O.jsx)('div', {
                                children: new Date(
                                  i.createdAt
                                ).toLocaleString(),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              m &&
                Object(O.jsx)(x, {
                  callback: function (e) {
                    if (v.user && v.access_token) {
                      var t = {
                        user: v.user,
                        blog_id: i.blog_id,
                        blog_user_id: i.blog_user_id,
                        content: e,
                        replyCM: [],
                        reply_user: i.user,
                        comment_root: i.comment_root || i._id,
                        createdAt: new Date().toISOString(),
                      };
                      j([t].concat(Object(b.a)(l))),
                        g(
                          (function (e, t) {
                            return (function () {
                              var a = Object(d.a)(
                                Object(u.a)().mark(function a(n) {
                                  var c, r;
                                  return Object(u.a)().wrap(
                                    function (a) {
                                      for (;;)
                                        switch ((a.prev = a.next)) {
                                          case 0:
                                            return (
                                              (a.next = 2), Object(k.a)(t, n)
                                            );
                                          case 2:
                                            return (
                                              (c = a.sent),
                                              (r = c || t),
                                              (a.prev = 4),
                                              (a.next = 7),
                                              Object(o.d)('reply_comment', e, r)
                                            );
                                          case 7:
                                            a.next = 12;
                                            break;
                                          case 9:
                                            (a.prev = 9),
                                              (a.t0 = a.catch(4)),
                                              n({
                                                type: w.a,
                                                payload: {
                                                  errors:
                                                    a.t0.response.data.msg,
                                                },
                                              });
                                          case 12:
                                          case 'end':
                                            return a.stop();
                                        }
                                    },
                                    a,
                                    null,
                                    [[4, 9]]
                                  );
                                })
                              );
                              return function (e) {
                                return a.apply(this, arguments);
                              };
                            })();
                          })(t, v.access_token)
                        ),
                        h(!1);
                    }
                  },
                }),
              r,
            ],
          });
        },
        C = function (e) {
          var t = e.comment,
            a = Object(c.useState)([]),
            r = Object(n.a)(a, 2),
            s = r[0],
            o = r[1],
            i = Object(c.useState)(2),
            l = Object(n.a)(i, 2),
            u = l[0],
            d = l[1];
          return (
            Object(c.useEffect)(
              function () {
                t.replyCM && o(t.replyCM);
              },
              [t.replyCM]
            ),
            Object(O.jsxs)('div', {
              className: 'my-3 d-flex',
              style: {
                opacity: t._id ? 1 : 0.5,
                pointerEvents: t._id ? 'initial' : 'none',
              },
              children: [
                Object(O.jsx)(v, { user: t.user }),
                Object(O.jsxs)(S, {
                  comment: t,
                  showReply: s,
                  setShowReply: o,
                  children: [
                    s.slice(0, u).map(function (e, t) {
                      return Object(O.jsxs)(
                        'div',
                        {
                          style: {
                            opacity: e._id ? 1 : 0.5,
                            pointerEvents: e._id ? 'initial' : 'none',
                          },
                          children: [
                            Object(O.jsx)(g, {
                              user: e.user,
                              reply_user: e.reply_user,
                            }),
                            Object(O.jsx)(S, {
                              comment: e,
                              showReply: s,
                              setShowReply: o,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                    Object(O.jsx)('div', {
                      style: { cursor: 'pointer' },
                      children:
                        s.length - u > 0
                          ? Object(O.jsx)('small', {
                              style: { color: 'crimson' },
                              onClick: function () {
                                return d(u + 5);
                              },
                              children: 'See more comments...',
                            })
                          : s.length > 2 &&
                            Object(O.jsx)('small', {
                              style: { color: 'teal' },
                              onClick: function () {
                                return d(2);
                              },
                              children: 'Hide comments...',
                            }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        E = a(53),
        T =
          (a(229),
          function (e) {
            var t = e.blog,
              a = Object(s.c)(function (e) {
                return e;
              }),
              l = a.auth,
              p = a.comments,
              f = Object(s.b)(),
              m = Object(c.useState)([]),
              h = Object(n.a)(m, 2),
              v = h[0],
              g = h[1],
              y = Object(c.useState)(!1),
              _ = Object(n.a)(y, 2),
              S = _[0],
              T = _[1],
              A = Object(r.f)();
            Object(c.useEffect)(
              function () {
                g(p.data);
              },
              [p.data]
            );
            var D = Object(c.useCallback)(
              (function () {
                var e = Object(d.a)(
                  Object(u.a)().mark(function e(t) {
                    var a,
                      n = arguments;
                    return Object(u.a)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = n.length > 1 && void 0 !== n[1] ? n[1] : 1),
                              T(!0),
                              (e.next = 4),
                              f(N(t, a))
                            );
                          case 4:
                            T(!1);
                          case 5:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [f]
            );
            Object(c.useEffect)(
              function () {
                if (t._id) {
                  var e = A.location.search.slice(6) || 1;
                  D(t._id, e);
                }
              },
              [t._id, D, A]
            );
            return Object(O.jsxs)('div', {
              style: { backgroundColor: '#FEF7EC' },
              children: [
                Object(O.jsx)('h2', {
                  className: 'text-center my-3 text-capitalize fs-1',
                  style: { color: '#A66908' },
                  children: t.title,
                }),
                Object(O.jsxs)('div', {
                  className: 'text-end fst-italic',
                  style: { color: 'teal' },
                  children: [
                    Object(O.jsx)('small', {
                      children:
                        'string' !== typeof t.user &&
                        'By: '.concat(t.user.name),
                    }),
                    Object(O.jsx)('small', {
                      className: 'ms-2',
                      children: new Date(t.createdAt).toLocaleString(),
                    }),
                  ],
                }),
                'string' === typeof t.thumbnail &&
                  Object(O.jsx)(j.b, {
                    to: '/blog/'.concat(t._id),
                    style: {
                      textDecoration: 'none',
                      textTransform: 'capitalize',
                    },
                    children: Object(O.jsx)('div', {
                      className:
                        'object-center object-cover rounded-lg space-y-10 mr-auto shadow-xl',
                      children: Object(O.jsx)('img', {
                        src: t.thumbnail,
                        className: 'card-img-top',
                        alt: '...',
                        style: {
                          maxWidth: '330px',
                          maxHeight: '380px',
                          objectFit: 'cover',
                          alignItems: 'center',
                          justifyContent: 'center',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        },
                      }),
                    }),
                  }),
                Object(O.jsx)('hr', { className: 'my-2' }),
                Object(O.jsx)('div', {
                  style: { fontSize: '20px' },
                  dangerouslySetInnerHTML: { __html: t.content },
                }),
                Object(O.jsx)('hr', { className: 'my-1' }),
                Object(O.jsx)('h3', {
                  style: { color: '#A66908' },
                  children:
                    '\u2729 \u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e97\u0eb1\u0ea1 \u2729',
                }),
                l.user
                  ? Object(O.jsx)(x, {
                      callback: function (e) {
                        if (l.user && l.access_token) {
                          var a = {
                            content: e,
                            user: l.user,
                            blog_id: t._id,
                            blog_user_id: t.user._id,
                            replyCM: [],
                            createdAt: new Date().toISOString(),
                          };
                          g([a].concat(Object(b.a)(v))),
                            f(
                              (function (e, t) {
                                return (function () {
                                  var a = Object(d.a)(
                                    Object(u.a)().mark(function a(n) {
                                      var c, r;
                                      return Object(u.a)().wrap(
                                        function (a) {
                                          for (;;)
                                            switch ((a.prev = a.next)) {
                                              case 0:
                                                return (
                                                  (a.next = 2),
                                                  Object(k.a)(t, n)
                                                );
                                              case 2:
                                                return (
                                                  (c = a.sent),
                                                  (r = c || t),
                                                  (a.prev = 4),
                                                  (a.next = 7),
                                                  Object(o.d)('comment', e, r)
                                                );
                                              case 7:
                                                a.next = 12;
                                                break;
                                              case 9:
                                                (a.prev = 9),
                                                  (a.t0 = a.catch(4)),
                                                  n({
                                                    type: w.a,
                                                    payload: {
                                                      errors:
                                                        a.t0.response.data.msg,
                                                    },
                                                  });
                                              case 12:
                                              case 'end':
                                                return a.stop();
                                            }
                                        },
                                        a,
                                        null,
                                        [[4, 9]]
                                      );
                                    })
                                  );
                                  return function (e) {
                                    return a.apply(this, arguments);
                                  };
                                })();
                              })(a, l.access_token)
                            );
                        }
                      },
                    })
                  : Object(O.jsxs)('h5', {
                      children: [
                        '\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2 ',
                        Object(O.jsx)(j.b, {
                          to: '/login?blog/'.concat(t._id),
                          children:
                            '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
                        }),
                        ' ',
                        '\u0ec0\u0e9e\u0eb7\u0ec8\u0ead\u0eaa\u0ebb\u0e99\u0e97\u0eb0\u0e99\u0eb2\u0e97\u0eb1\u0ea1.',
                      ],
                    }),
                S
                  ? Object(O.jsx)(i.a, {})
                  : null === v || void 0 === v
                  ? void 0
                  : v.map(function (e, t) {
                      return Object(O.jsx)(C, { comment: e }, t);
                    }),
                p.total > 1 &&
                  Object(O.jsx)(E.a, {
                    total: p.total,
                    callback: function (e) {
                      t._id && D(t._id, e);
                    },
                  }),
              ],
            });
          });
      t.default = function () {
        var e = Object(r.h)().slug,
          t = Object(s.c)(function (e) {
            return e;
          }).socket,
          a = Object(c.useState)(),
          u = Object(n.a)(a, 2),
          d = u[0],
          b = u[1],
          j = Object(c.useState)(!1),
          p = Object(n.a)(j, 2),
          f = p[0],
          m = p[1],
          h = Object(c.useState)(''),
          x = Object(n.a)(h, 2),
          v = x[0],
          g = x[1];
        return (
          Object(c.useEffect)(
            function () {
              if (e)
                return (
                  m(!0),
                  Object(o.b)('blog/'.concat(e))
                    .then(function (e) {
                      b(e.data), m(!1);
                    })
                    .catch(function (e) {
                      g(e.response.data.msg), m(!1);
                    }),
                  function () {
                    return b(void 0);
                  }
                );
            },
            [e]
          ),
          Object(c.useEffect)(
            function () {
              if (e && t)
                return (
                  t.emit('joinRoom', e),
                  function () {
                    t.emit('outRoom', e);
                  }
                );
            },
            [t, e]
          ),
          f
            ? Object(O.jsx)(i.a, {})
            : Object(O.jsxs)('div', {
                className: 'my-4',
                children: [
                  v && Object(l.b)(v),
                  d && Object(O.jsx)(T, { blog: d }),
                ],
              })
        );
      };
    },
    113: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6),
        c = a(1),
        r = a(12),
        s = a(8),
        o = a(5),
        i = a(34),
        l = a(4),
        u = a(21),
        d = a(0),
        b = function () {
          var e = Object(c.useState)({ account: '', password: '' }),
            t = Object(n.a)(e, 2),
            a = t[0],
            r = t[1],
            s = a.account,
            b = a.password,
            j = Object(c.useState)(!1),
            p = Object(n.a)(j, 2),
            f = p[0],
            O = p[1],
            m = Object(o.b)(),
            h = function (e) {
              var t = e.target,
                n = t.value,
                c = t.name;
              r(Object(l.a)(Object(l.a)({}, a), {}, Object(i.a)({}, c, n)));
            };
          return Object(d.jsxs)('form', {
            onSubmit: function (e) {
              e.preventDefault(), m(Object(u.d)(a));
            },
            children: [
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'account',
                    className: 'form-label',
                    children: '\u0ead\u0eb5\u0ec0\u0ea1\u0ea7',
                  }),
                  Object(d.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'account',
                    name: 'account',
                    value: s,
                    onChange: h,
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'password',
                    className: 'form-label',
                    children:
                      '\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                  }),
                  Object(d.jsxs)('div', {
                    className: 'pass',
                    children: [
                      Object(d.jsx)('input', {
                        type: f ? 'text' : 'password',
                        className: 'form-control',
                        id: 'password',
                        name: 'password',
                        value: b,
                        onChange: h,
                      }),
                      Object(d.jsx)('small', {
                        onClick: function () {
                          return O(!f);
                        },
                        children: f ? 'Hide' : 'Show',
                      }),
                    ],
                  }),
                ],
              }),
              Object(d.jsx)('button', {
                type: 'submit',
                className: 'btn btn-warning w-100 mt-1 text-white',
                disabled: !s || !b,
                style: { backgroundColor: '#A0522D' },
                children:
                  '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
              }),
            ],
          });
        },
        j = function () {
          var e = Object(c.useState)(''),
            t = Object(n.a)(e, 2),
            a = t[0],
            r = t[1],
            s = Object(o.b)();
          return Object(d.jsxs)('form', {
            onSubmit: function (e) {
              e.preventDefault(), s(Object(u.e)(a));
            },
            children: [
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'phone',
                    className: 'form-label',
                    children:
                      '\u0ec0\u0e9a\u0eb5\u0ec2\u0e97\u0ea5\u0eb0\u0eaa\u0eb1\u0e9a',
                  }),
                  Object(d.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'phone',
                    value: a,
                    onChange: function (e) {
                      return r(e.target.value);
                    },
                    placeholder: '+84374481936',
                  }),
                ],
              }),
              Object(d.jsx)('button', {
                type: 'submit',
                className: 'btn btn-dark w-100',
                disabled: !a,
                children:
                  '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
              }),
            ],
          });
        },
        p = a(120),
        f = function () {
          var e = Object(o.b)();
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsx)('div', {
              className: 'my-2',
              children: Object(d.jsx)(p.GoogleLogin, {
                client_id:
                  '828200238885-j7t2kkels5e60vdo5meevoo8jpaf38hp.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                onSuccess: function (t) {
                  var a = t.getAuthResponse().id_token;
                  e(Object(u.c)(a));
                },
              }),
            }),
          });
        };
      t.default = function () {
        var e = Object(c.useState)(!1),
          t = Object(n.a)(e, 2),
          a = t[0],
          i = (t[1], Object(r.f)()),
          l = Object(o.c)(function (e) {
            return e;
          }).auth;
        return (
          Object(c.useEffect)(
            function () {
              if (l.access_token) {
                var e = i.location.search.replace('?', '/');
                return i.push(e);
              }
            },
            [l.access_token, i]
          ),
          Object(d.jsx)('div', {
            className: 'auth_page',
            children: Object(d.jsxs)('div', {
              className: 'auth_box',
              children: [
                Object(d.jsx)('h3', {
                  className: 'text-uppercase text-center mb-4',
                  children:
                    '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
                }),
                Object(d.jsx)(f, {}),
                a ? Object(d.jsx)(j, {}) : Object(d.jsx)(b, {}),
                Object(d.jsx)('small', {
                  className: 'row my-2 text-primary',
                  style: { cursor: 'pointer' },
                  children: Object(d.jsx)('span', {
                    className: 'col-6',
                    children: Object(d.jsx)(s.b, {
                      to: '/forgot_password',
                      children:
                        '\u0ea5\u0eb7\u0ea1\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99?',
                    }),
                  }),
                }),
                Object(d.jsxs)('p', {
                  children: [
                    '\u0e97\u0ec8\u0eb2\u0e99\u0eaa\u0eb0\u0ea1\u0eb1\u0e81\u0eaa\u0eb0\u0ea1\u0eb2\u0e8a\u0eb4\u0e81\u0ec0\u0ec0\u0ea5\u0ec9\u0ea7 \u0eab\u0ebc\u0eb7 \u0e8d\u0eb1\u0e87?',
                    Object(d.jsxs)(s.b, {
                      to: '/register'.concat(i.location.search),
                      style: { color: 'crimson' },
                      children: [
                        ' ',
                        ' \u0eaa\u0eb0\u0ea1\u0eb1\u0e81\u0eaa\u0eb0\u0ea1\u0eb2\u0e8a\u0eb4\u0e81',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    114: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        c = a(12),
        r = a(5),
        s = a(34),
        o = a(4),
        i = a(6),
        l = a(42),
        u = a(46),
        d = a(0),
        b = function () {
          var e = Object(r.c)(function (e) {
              return e;
            }).auth,
            t = Object(r.b)(),
            a = Object(n.useState)({
              name: '',
              account: '',
              avatar: '',
              password: '',
              cf_password: '',
            }),
            c = Object(i.a)(a, 2),
            b = c[0],
            j = c[1],
            p = Object(n.useState)(!1),
            f = Object(i.a)(p, 2),
            O = f[0],
            m = f[1],
            h = Object(n.useState)(!1),
            x = Object(i.a)(h, 2),
            v = x[0],
            g = x[1],
            y = function (e) {
              var t = e.target,
                a = t.name,
                n = t.value;
              j(Object(o.a)(Object(o.a)({}, b), {}, Object(s.a)({}, a, n)));
            },
            w = b.name,
            _ = b.avatar,
            k = b.password,
            N = b.cf_password,
            S = new Blob([_], { type: 'text/plain' });
          return e.user
            ? Object(d.jsxs)('form', {
                className: 'profile_info',
                onSubmit: function (a) {
                  a.preventDefault(),
                    (_ || w) && t(Object(u.c)(_, w, e)),
                    k && e.access_token && t(Object(u.b)(k, N, e.access_token));
                },
                children: [
                  Object(d.jsxs)('div', {
                    className: 'info_avatar',
                    children: [
                      Object(d.jsx)('img', {
                        src: _ ? URL.createObjectURL(S) : e.user.avatar,
                        alt: 'avatar',
                      }),
                      Object(d.jsxs)('span', {
                        children: [
                          Object(d.jsx)('i', { className: 'fas fa-camera' }),
                          Object(d.jsx)('p', {
                            children: '\u0e9b\u0ec8\u0ebd\u0e99',
                          }),
                          Object(d.jsx)('input', {
                            type: 'file',
                            accept: 'image/*',
                            name: 'file',
                            id: 'file_up',
                            onChange: function (e) {
                              var t = e.target.files;
                              if (t) {
                                var a = t[0];
                                j(
                                  Object(o.a)(
                                    Object(o.a)({}, b),
                                    {},
                                    { avatar: a }
                                  )
                                );
                              }
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsxs)('div', {
                    className: 'form-group my-3',
                    children: [
                      Object(d.jsx)('label', {
                        htmlFor: 'name',
                        children: '\u0e8a\u0eb7\u0ec9',
                      }),
                      Object(d.jsx)('input', {
                        type: 'text',
                        className: 'form-control',
                        id: 'name',
                        name: 'name',
                        defaultValue: e.user.name,
                        onChange: y,
                      }),
                    ],
                  }),
                  Object(d.jsxs)('div', {
                    className: 'form-group my-3',
                    children: [
                      Object(d.jsx)('label', {
                        htmlFor: 'account',
                        children: '\u0ead\u0eb5\u0ec0\u0ea1\u0ea7',
                      }),
                      Object(d.jsx)('input', {
                        type: 'text',
                        className: 'form-control',
                        id: 'account',
                        name: 'account',
                        defaultValue: e.user.account,
                        onChange: y,
                        disabled: !0,
                      }),
                    ],
                  }),
                  'register' !== e.user.type &&
                    Object(d.jsxs)('small', {
                      className: 'text-danger',
                      children: [
                        '* Quick login account with ',
                        e.user.type,
                        " can't use this function *",
                      ],
                    }),
                  Object(d.jsxs)('div', {
                    className: 'form-group my-3',
                    children: [
                      Object(d.jsx)('label', {
                        htmlFor: 'password',
                        children:
                          '\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                      }),
                      Object(d.jsxs)('div', {
                        className: 'pass',
                        children: [
                          Object(d.jsx)('input', {
                            type: O ? 'text' : 'password',
                            className: 'form-control',
                            id: 'password',
                            name: 'password',
                            value: k,
                            onChange: y,
                            disabled: 'register' !== e.user.type,
                          }),
                          Object(d.jsx)('small', {
                            onClick: function () {
                              return m(!O);
                            },
                            children: O ? 'Hide' : 'Show',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsxs)('div', {
                    className: 'form-group my-3',
                    children: [
                      Object(d.jsx)('label', {
                        htmlFor: 'cf_password',
                        children:
                          '\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                      }),
                      Object(d.jsxs)('div', {
                        className: 'pass',
                        children: [
                          Object(d.jsx)('input', {
                            type: v ? 'text' : 'password',
                            className: 'form-control',
                            id: 'cf_password',
                            name: 'cf_password',
                            value: N,
                            onChange: y,
                            disabled: 'register' !== e.user.type,
                          }),
                          Object(d.jsx)('small', {
                            onClick: function () {
                              return g(!v);
                            },
                            children: v ? 'Hide' : 'Show',
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)('button', {
                    className: 'btn btn-dark w-100',
                    type: 'submit',
                    children: '\u0ec0\u0ec0\u0e81\u0ec9\u0ec4\u0e82',
                  }),
                ],
              })
            : Object(d.jsx)(l.a, {});
        },
        j = a(30),
        p = function (e) {
          var t = e.id,
            a = Object(n.useState)(),
            c = Object(i.a)(a, 2),
            s = c[0],
            o = c[1],
            l = Object(r.c)(function (e) {
              return e;
            }).otherInfo,
            b = Object(r.b)();
          return (
            Object(n.useEffect)(
              function () {
                if (t)
                  if (
                    l.every(function (e) {
                      return e._id !== t;
                    })
                  )
                    b(Object(u.a)(t));
                  else {
                    var e = l.find(function (e) {
                      return e._id === t;
                    });
                    e && o(e);
                  }
              },
              [t, l, b]
            ),
            s
              ? Object(d.jsxs)('div', {
                  className: 'profile_info text-center rounded',
                  children: [
                    Object(d.jsx)('div', {
                      className: 'info_avatar',
                      children: Object(d.jsx)('img', {
                        src: s.avatar,
                        alt: 'avatar',
                      }),
                    }),
                    Object(d.jsx)('h5', {
                      className: 'text-uppercase text-danger',
                      children: s.role,
                    }),
                    Object(d.jsxs)('div', {
                      children: [
                        'Name: ',
                        Object(d.jsx)('span', {
                          className: 'text-info',
                          children: s.name,
                        }),
                      ],
                    }),
                    Object(d.jsx)('div', { children: 'Email / Phone number' }),
                    Object(d.jsx)('span', {
                      className: 'text-info',
                      children: s.account,
                    }),
                    Object(d.jsxs)('div', {
                      children: [
                        'Join Date: ',
                        Object(d.jsx)('span', {
                          style: { color: '#ffc107' },
                          children: new Date(s.createdAt).toLocaleString(),
                        }),
                      ],
                    }),
                  ],
                })
              : Object(d.jsx)(j.a, {})
          );
        },
        f = a(26),
        O = a(54),
        m = a(53),
        h = function () {
          var e = Object(r.c)(function (e) {
              return e;
            }).blogsUser,
            t = Object(r.b)(),
            a = Object(c.h)().slug,
            s = Object(n.useState)(),
            o = Object(i.a)(s, 2),
            l = o[0],
            u = o[1],
            b = Object(n.useState)(0),
            p = Object(i.a)(b, 2),
            h = p[0],
            x = p[1],
            v = Object(c.f)(),
            g = v.location.search;
          Object(n.useEffect)(
            function () {
              if (a)
                if (
                  e.every(function (e) {
                    return e.id !== a;
                  })
                )
                  t(Object(f.d)(a, g));
                else {
                  var n = e.find(function (e) {
                    return e.id === a;
                  });
                  if (!n) return;
                  u(n.blogs), x(n.total), n.search && v.push(n.search);
                }
            },
            [a, e, t, g, v]
          );
          return l
            ? 0 === l.length && h < 1
              ? Object(d.jsx)('h3', {
                  className: 'text-center',
                  children: 'No Suttra',
                })
              : Object(d.jsxs)('div', {
                  children: [
                    Object(d.jsx)('div', {
                      children: l.map(function (e) {
                        return Object(d.jsx)(O.a, { blog: e }, e._id);
                      }),
                    }),
                    Object(d.jsx)('div', {
                      children: Object(d.jsx)(m.a, {
                        total: h,
                        callback: function (e) {
                          var n = '?page='.concat(e);
                          t(Object(f.d)(a, n));
                        },
                      }),
                    }),
                  ],
                })
            : Object(d.jsx)(j.a, {});
        };
      t.default = function () {
        var e,
          t = Object(c.h)().slug,
          a = Object(r.c)(function (e) {
            return e;
          }).auth;
        return Object(d.jsxs)('div', {
          className: 'row my-3',
          children: [
            Object(d.jsx)('div', {
              className: 'col-md-5 mb-3',
              children:
                (null === (e = a.user) || void 0 === e ? void 0 : e._id) === t
                  ? Object(d.jsx)(b, {})
                  : Object(d.jsx)(p, { id: t }),
            }),
            Object(d.jsx)('div', {
              className: 'col-md-7',
              children: Object(d.jsx)(h, {}),
            }),
          ],
        });
      };
    },
    115: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        c = a(12),
        r = a(8),
        s = a(34),
        o = a(4),
        i = a(6),
        l = a(5),
        u = a(21),
        d = a(0),
        b = function () {
          var e = Object(n.useState)({
              name: '',
              account: '',
              password: '',
              cf_password: '',
            }),
            t = Object(i.a)(e, 2),
            a = t[0],
            c = t[1],
            r = a.name,
            b = a.account,
            j = a.password,
            p = a.cf_password,
            f = Object(n.useState)(!1),
            O = Object(i.a)(f, 2),
            m = O[0],
            h = O[1],
            x = Object(n.useState)(!1),
            v = Object(i.a)(x, 2),
            g = v[0],
            y = v[1],
            w = Object(l.b)(),
            _ = function (e) {
              var t = e.target,
                n = t.value,
                r = t.name;
              c(Object(o.a)(Object(o.a)({}, a), {}, Object(s.a)({}, r, n)));
            };
          return Object(d.jsxs)('form', {
            onSubmit: function (e) {
              e.preventDefault(), w(Object(u.h)(a));
            },
            children: [
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'name',
                    className: 'form-label',
                    children: '\u0e8a\u0eb7\u0ec9',
                  }),
                  Object(d.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'name',
                    name: 'name',
                    value: r,
                    onChange: _,
                    placeholder: '\u0e8a\u0eb7\u0ec9',
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'account',
                    className: 'form-label',
                    children: '\u0ead\u0eb5\u0ec0\u0ea1\u0ea7',
                  }),
                  Object(d.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'account',
                    name: 'account',
                    value: b,
                    onChange: _,
                    placeholder: 'Example@gmail.com',
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'password',
                    className: 'form-label',
                    children:
                      '\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                  }),
                  Object(d.jsxs)('div', {
                    className: 'pass',
                    children: [
                      Object(d.jsx)('input', {
                        type: m ? 'text' : 'password',
                        className: 'form-control',
                        id: 'password',
                        name: 'password',
                        value: j,
                        onChange: _,
                        placeholder:
                          '\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e9b\u0ec9\u0ead\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0ea2\u0ec8\u0eb2\u0e87\u0edc\u0ec9\u0ead\u0e8d 6 \u0ec2\u0e95\u0e82\u0eb7\u0ec9\u0e99\u0ec4\u0e9b',
                      }),
                      Object(d.jsx)('small', {
                        onClick: function () {
                          return h(!m);
                        },
                        children: m ? 'Hide' : 'Show',
                      }),
                    ],
                  }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: 'form-group mb-3',
                children: [
                  Object(d.jsx)('label', {
                    htmlFor: 'password',
                    className: 'form-label',
                    children:
                      '\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                  }),
                  Object(d.jsxs)('div', {
                    className: 'pass',
                    children: [
                      Object(d.jsx)('input', {
                        type: g ? 'text' : 'password',
                        className: 'form-control',
                        id: 'cf_password',
                        name: 'cf_password',
                        value: p,
                        onChange: _,
                        placeholder:
                          '\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99',
                      }),
                      Object(d.jsx)('small', {
                        onClick: function () {
                          return y(!g);
                        },
                        children: g ? 'Hide' : 'Show',
                      }),
                    ],
                  }),
                ],
              }),
              Object(d.jsx)('button', {
                type: 'submit',
                className: 'btn btn-dark w-100 my-1',
                style: { backgroundColor: '#A0522D' },
                children:
                  '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
              }),
            ],
          });
        };
      t.default = function () {
        var e = Object(c.f)();
        return Object(d.jsx)('div', {
          className: 'auth_page',
          children: Object(d.jsxs)('div', {
            className: 'auth_box',
            children: [
              Object(d.jsx)('h3', {
                className: 'text-uppercase text-center mb-4',
                children:
                  '\u0eaa\u0eb0\u0ea1\u0eb1\u0e81\u0eaa\u0eb0\u0ea1\u0eb2\u0e8a\u0eb4\u0e81',
              }),
              Object(d.jsx)(b, {}),
              Object(d.jsxs)('p', {
                className: 'mt-2 text-amber-800',
                children: [
                  '\u0e97\u0ec8\u0eb2\u0e99\u0ea1\u0eb5\u0e9a\u0eb1\u0e99\u0e8a\u0eb5\u0ec0\u0ec0\u0ea5\u0ec9\u0ea7 \u0eab\u0eb7\u0ebc \u0e8d\u0eb1\u0e87? ',
                  Object(d.jsx)(r.b, {
                    to: '/login'.concat(e.location.search),
                    style: { color: 'crimson' },
                    children:
                      '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    129: function (e, t, a) {},
    133: function (e, t, a) {
      var n = {
        './': 77,
        './active/[slug]': 85,
        './active/[slug].tsx': 85,
        './blog/[slug]': 112,
        './blog/[slug].tsx': 112,
        './blogs/[slug]': 107,
        './blogs/[slug].tsx': 107,
        './category': 108,
        './category.tsx': 108,
        './create_blog': 67,
        './create_blog.tsx': 67,
        './forgot_password': 109,
        './forgot_password.tsx': 109,
        './index': 77,
        './index.tsx': 77,
        './login': 113,
        './login.tsx': 113,
        './profile/[slug]': 114,
        './profile/[slug].tsx': 114,
        './register': 115,
        './register.tsx': 115,
        './reset_password/[slug]': 110,
        './reset_password/[slug].tsx': 110,
        './update_blog/[slug]': 111,
        './update_blog/[slug].tsx': 111,
      };
      function c(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return n[e];
      }
      (c.keys = function () {
        return Object.keys(n);
      }),
        (c.resolve = r),
        (e.exports = c),
        (c.id = 133);
    },
    134: function (e, t, a) {},
    18: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      }),
        a.d(t, 'd', function () {
          return c;
        }),
        a.d(t, 'e', function () {
          return r;
        }),
        a.d(t, 'f', function () {
          return s;
        }),
        a.d(t, 'g', function () {
          return o;
        }),
        a.d(t, 'b', function () {
          return i;
        }),
        a.d(t, 'c', function () {
          return l;
        });
      var n = 'CREATE_COMMENT',
        c = 'GET_COMMENTS',
        r = 'REPLY_COMMENT',
        s = 'UPDATE_COMMENT',
        o = 'UPDATE_REPLY',
        i = 'DELETE_COMMENT',
        l = 'DELETE_REPLY';
    },
    19: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return i;
      });
      var n = a(2),
        c = a(7),
        r = a(118),
        s = a(27),
        o = a(9),
        i = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a) {
              var c;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(Object(r.a)(t).exp >= Date.now() / 1e3)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt('return');
                    case 3:
                      return (e.next = 5), Object(o.b)('refresh_token');
                    case 5:
                      return (
                        (c = e.sent),
                        a({ type: s.a, payload: c.data }),
                        e.abrupt('return', c.data.access_token)
                      );
                    case 8:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })();
    },
    21: function (e, t, a) {
      'use strict';
      a.d(t, 'd', function () {
        return u;
      }),
        a.d(t, 'h', function () {
          return d;
        }),
        a.d(t, 'g', function () {
          return b;
        }),
        a.d(t, 'f', function () {
          return j;
        }),
        a.d(t, 'c', function () {
          return p;
        }),
        a.d(t, 'a', function () {
          return f;
        }),
        a.d(t, 'e', function () {
          return O;
        }),
        a.d(t, 'b', function () {
          return h;
        });
      var n = a(2),
        c = a(7),
        r = a(27),
        s = a(3),
        o = a(9),
        i = a(45),
        l = a(19),
        u = function (e) {
          return (function () {
            var t = Object(c.a)(
              Object(n.a)().mark(function t(a) {
                var c;
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: s.a, payload: { loading: !0 } }),
                            (t.next = 4),
                            Object(o.d)('login', e)
                          );
                        case 4:
                          (c = t.sent),
                            a({ type: r.a, payload: c.data }),
                            a({ type: s.a, payload: { success: c.data.msg } }),
                            localStorage.setItem('logged', 'suttra'),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            a({
                              type: s.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        d = function (e) {
          return (function () {
            var t = Object(c.a)(
              Object(n.a)().mark(function t(a) {
                var c, r;
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!((c = Object(i.d)(e)).errLength > 0)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            a({ type: s.a, payload: { errors: c.errMsg } })
                          );
                        case 3:
                          return (
                            (t.prev = 3),
                            a({ type: s.a, payload: { loading: !0 } }),
                            (t.next = 7),
                            Object(o.d)('register', e)
                          );
                        case 7:
                          (r = t.sent),
                            a({ type: s.a, payload: { success: r.data.msg } }),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(3)),
                            a({
                              type: s.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        b = function () {
          return (function () {
            var e = Object(c.a)(
              Object(n.a)().mark(function e(t) {
                var a;
                return Object(n.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('suttra' === localStorage.getItem('logged')) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt('return');
                        case 3:
                          return (
                            (e.prev = 3),
                            t({ type: s.a, payload: { loading: !0 } }),
                            (e.next = 7),
                            Object(o.b)('refresh_token')
                          );
                        case 7:
                          (a = e.sent),
                            t({ type: r.a, payload: a.data }),
                            t({ type: s.a, payload: {} }),
                            (e.next = 16);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(3)),
                            t({
                              type: s.a,
                              payload: { errors: e.t0.response.data.msg },
                            }),
                            localStorage.removeItem('logged');
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 12]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        j = function (e) {
          return (function () {
            var t = Object(c.a)(
              Object(n.a)().mark(function t(a) {
                var c, i;
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), Object(l.a)(e, a);
                        case 2:
                          return (
                            (c = t.sent),
                            (i = c || e),
                            (t.prev = 4),
                            localStorage.removeItem('logged'),
                            a({ type: r.a, payload: {} }),
                            (t.next = 9),
                            Object(o.b)('logout', i)
                          );
                        case 9:
                          t.next = 14;
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(4)),
                            a({
                              type: s.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[4, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        p = function (e) {
          return (function () {
            var t = Object(c.a)(
              Object(n.a)().mark(function t(a) {
                var c;
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: s.a, payload: { loading: !0 } }),
                            (t.next = 4),
                            Object(o.d)('google_login', { id_token: e })
                          );
                        case 4:
                          (c = t.sent),
                            a({ type: r.a, payload: c.data }),
                            a({ type: s.a, payload: { success: c.data.msg } }),
                            localStorage.setItem('logged', 'suttra'),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            a({
                              type: s.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        f = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              Object(n.a)().mark(function a(c) {
                var i;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            c({ type: s.a, payload: { loading: !0 } }),
                            (a.next = 4),
                            Object(o.d)('facebook_login', {
                              accessToken: e,
                              userID: t,
                            })
                          );
                        case 4:
                          (i = a.sent),
                            c({ type: r.a, payload: i.data }),
                            c({ type: s.a, payload: { success: i.data.msg } }),
                            localStorage.setItem('logged', 'suttra'),
                            (a.next = 13);
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(0)),
                            c({
                              type: s.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        O = function (e) {
          return (function () {
            var t = Object(c.a)(
              Object(n.a)().mark(function t(a) {
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (Object(i.c)(e)) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            a({
                              type: s.a,
                              payload: {
                                errors: 'Phone number format is incorrect.',
                              },
                            })
                          );
                        case 3:
                          return (
                            (t.prev = 3),
                            a({ type: s.a, payload: { loading: !0 } }),
                            (t.next = 7),
                            Object(o.d)('login_sms', { phone: e })
                          );
                        case 7:
                          t.sent.data.valid || m(e, a), (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(3)),
                            a({
                              type: s.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        m = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a) {
              var c, i;
              return Object(n.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((c = prompt('Enter your code'))) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return');
                      case 3:
                        return (
                          (e.prev = 3),
                          a({ type: s.a, payload: { loading: !0 } }),
                          (e.next = 7),
                          Object(o.d)('sms_verify', { phone: t, code: c })
                        );
                      case 7:
                        (i = e.sent),
                          a({ type: r.a, payload: i.data }),
                          a({ type: s.a, payload: { success: i.data.msg } }),
                          localStorage.setItem('logged', 'suttra'),
                          (e.next = 17);
                        break;
                      case 13:
                        (e.prev = 13),
                          (e.t0 = e.catch(3)),
                          a({
                            type: s.a,
                            payload: { errors: e.t0.response.data.msg },
                          }),
                          setTimeout(function () {
                            m(t, a);
                          }, 100);
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 13]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        h = function (e) {
          return (function () {
            var t = Object(c.a)(
              Object(n.a)().mark(function t(a) {
                var c;
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: s.a, payload: { loading: !0 } }),
                            (t.next = 4),
                            Object(o.d)('forgot_password', { account: e })
                          );
                        case 4:
                          (c = t.sent),
                            a({ type: s.a, payload: { success: c.data.msg } }),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(0)),
                            a({
                              type: s.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    229: function (e, t, a) {},
    23: function (e, t, a) {
      'use strict';
      a.d(t, 'e', function () {
        return n;
      }),
        a.d(t, 'c', function () {
          return c;
        }),
        a.d(t, 'd', function () {
          return r;
        }),
        a.d(t, 'a', function () {
          return s;
        }),
        a.d(t, 'b', function () {
          return o;
        });
      var n = 'GET_HOME_BLOGS',
        c = 'GET_BLOGS_CATEGORY_ID',
        r = 'GET_BLOGS_USER_ID',
        s = 'CREATE_BLOGS_USER_ID',
        o = 'DELETE_BLOGS_USER_ID';
    },
    230: function (e, t, a) {},
    232: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        c = a.n(n),
        r = a(58),
        s = a.n(r),
        o = (a(129), a(6)),
        i = a(8),
        l = a(12),
        u = a(5),
        d = a(42),
        b = a(0),
        j = function () {
          var e = Object(l.h)(),
            t = e.page,
            n = e.slug,
            r = '';
          return (
            t && (r = n ? ''.concat(t, '/[slug]') : ''.concat(t)),
            (function (e) {
              try {
                return c.a.createElement(a(133)('./'.concat(e)).default);
              } catch (t) {
                return Object(b.jsx)(d.a, {});
              }
            })(r)
          );
        },
        p = a(2),
        f = a(7),
        O = a(9),
        m = a(54),
        h = function () {
          var e = Object(n.useState)(''),
            t = Object(o.a)(e, 2),
            a = t[0],
            c = t[1],
            r = Object(n.useState)([]),
            s = Object(o.a)(r, 2),
            i = s[0],
            u = s[1],
            d = Object(l.g)().pathname;
          return (
            Object(n.useEffect)(
              function () {
                var e = setTimeout(
                  Object(f.a)(
                    Object(p.a)().mark(function e() {
                      var t;
                      return Object(p.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(a.length < 2)) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt('return', u([]));
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  Object(O.b)('search/blogs?content='.concat(a))
                                );
                              case 5:
                                (t = e.sent), u(t.data), (e.next = 12);
                                break;
                              case 9:
                                (e.prev = 9),
                                  (e.t0 = e.catch(2)),
                                  console.log(e.t0);
                              case 12:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 9]]
                      );
                    })
                  ),
                  400
                );
                return function () {
                  return clearTimeout(e);
                };
              },
              [a]
            ),
            Object(n.useEffect)(
              function () {
                c(''), u([]);
              },
              [d]
            ),
            Object(b.jsxs)(b.Fragment, {
              children: [
                Object(b.jsx)('input', {
                  type: 'search',
                  className: 'ml-10 pl-10 w-full mx-auto shadow-sm',
                  style: { height: '40px', borderRadius: '8px' },
                  value: a,
                  placeholder:
                    ' \ud83d\udd0d\u0e84\u0ebb\u0ec9\u0e99\u0eab\u0eb2\u0e9e\u0ea3\u0eb0\u0eaa\u0eb9\u0e94...',
                  onChange: function (e) {
                    return c(e.target.value);
                  },
                }),
                a.length >= 2 &&
                  Object(b.jsx)('div', {
                    className: 'position-absolute pt-2 px-1 w-auto rounded',
                    style: {
                      background: '#eee',
                      zIndex: 10,
                      maxHeight: 'calc(100vh - 100px)',
                      overflow: 'auto',
                    },
                    children: i.length
                      ? i.map(function (e) {
                          return Object(b.jsx)(m.a, { blog: e }, e._id);
                        })
                      : Object(b.jsx)('h3', {
                          className: 'text-center',
                          children: 'No Suttra',
                        }),
                  }),
              ],
            })
          );
        },
        x = a(21),
        v = function () {
          var e,
            t = Object(u.c)(function (e) {
              return e;
            }).auth,
            a = Object(u.b)(),
            n = Object(l.g)().pathname,
            c = t.access_token
              ? [
                  {
                    label: '\u0edc\u0ec9\u0eb2\u0eab\u0ebc\u0eb1\u0e81',
                    path: '/',
                  },
                  {
                    label:
                      '\u0ec0\u0e9e\u0eb5\u0ec9\u0ea1\u0e9e\u0ea3\u0eb0\u0eaa\u0eb9\u0e94',
                    path: '/create_blog',
                  },
                ]
              : [
                  {
                    label: '\u0edc\u0ec9\u0eb2\u0eab\u0ebc\u0eb1\u0e81',
                    path: '/',
                  },
                  {
                    label:
                      '\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
                    path: '/login',
                  },
                  {
                    label:
                      '\u0eaa\u0eb0\u0ea1\u0eb1\u0e81\u0eaa\u0eb0\u0ea1\u0eb2\u0e8a\u0eb4\u0e81',
                    path: '/register',
                  },
                ],
            r = function (e) {
              if (e === n) return 'active';
            };
          return Object(b.jsxs)('ul', {
            className: 'navbar-nav ms-auto',
            style: { backgroundColor: '#FEF7EC', fontWeight: 'bold' },
            children: [
              c.map(function (e, t) {
                return Object(b.jsx)(b.Fragment, {
                  children: Object(b.jsx)(
                    'li',
                    {
                      className: 'nav-item '.concat(r(e.path)),
                      style: { fontWeight: 'bold' },
                      children: Object(b.jsx)(i.b, {
                        className: 'nav-link',
                        to: e.path,
                        style: { fontWeight: 'bold' },
                        children: e.label,
                      }),
                    },
                    t
                  ),
                });
              }),
              'admin' ===
                (null === (e = t.user) || void 0 === e ? void 0 : e.role) &&
                Object(b.jsx)('li', {
                  className: 'nav-item '.concat(r('/category')),
                  children: Object(b.jsx)(i.b, {
                    to: '/category',
                    className: 'nav-link',
                    children: '\u0edd\u0ea7\u0e94\u0e97\u0eb1\u0ea1',
                  }),
                }),
              t.user &&
                Object(b.jsxs)('li', {
                  className: 'nav-item dropdown',
                  children: [
                    Object(b.jsx)('span', {
                      className: 'nav-link dropdown-toggle',
                      id: 'navbarDropdown',
                      role: 'button',
                      'data-bs-toggle': 'dropdown',
                      'aria-expanded': 'false',
                      children: Object(b.jsx)('img', {
                        src: t.user.avatar,
                        alt: 'avatar',
                        className: 'avatar',
                      }),
                    }),
                    Object(b.jsxs)('ul', {
                      className: 'dropdown-menu',
                      'aria-labelledby': 'navbarDropdown',
                      children: [
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)(i.b, {
                            className: 'dropdown-item',
                            to: '/profile/'.concat(t.user._id),
                            children:
                              '\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0eaa\u0eb0\u0ea1\u0eb2\u0e8a\u0eb4\u0e81',
                          }),
                        }),
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)('hr', {
                            className: 'dropdown-divider',
                          }),
                        }),
                        Object(b.jsx)('li', {
                          children: Object(b.jsx)(i.b, {
                            className: 'dropdown-item',
                            to: '/',
                            onClick: function () {
                              t.access_token && a(Object(x.f)(t.access_token));
                            },
                            children:
                              '\u0ead\u0ead\u0e81\u0e88\u0eb2\u0e81\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        g = function () {
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsxs)('nav', {
              className:
                'navbar navbar-expand-lg navbar-light bg-transparent border-gray-200 rounded dark:bg-gray-900',
              style: {
                position: 'sticky',
                top: 0,
                left: 0,
                zIndex: 9,
                backgroundColor: '#FEF7EC',
              },
              children: [
                Object(b.jsx)('div', {
                  className: 'w-auto fixed translate-x-96',
                  children: Object(b.jsx)(h, {}),
                }),
                Object(b.jsx)('button', {
                  style: { borderRadius: '12px' },
                  className:
                    'navbar-toggler w-auto position-relative rounded-md fixed translate-x-96',
                  type: 'button',
                  'data-bs-toggle': 'collapse',
                  'data-bs-target': '#navbarNav',
                  'aria-controls': 'navbarNav',
                  'aria-expanded': 'false',
                  'aria-label': 'Toggle navigation',
                  children: Object(b.jsx)('span', {
                    className: 'navbar-toggler-icon',
                  }),
                }),
                Object(b.jsx)('div', {
                  className: 'collapse navbar-collapse fixed translate-x-96',
                  id: 'navbarNav',
                  children: Object(b.jsx)(v, {}),
                }),
              ],
            }),
          });
        },
        y = a(47),
        w = a(57),
        _ = a(26),
        k = a(124),
        N = a(18),
        S = function () {
          var e = Object(u.c)(function (e) {
              return e;
            }).socket,
            t = Object(u.b)();
          return (
            Object(n.useEffect)(
              function () {
                if (e)
                  return (
                    e.on('createComment', function (e) {
                      t({ type: N.a, payload: e });
                    }),
                    function () {
                      e.off('createComment');
                    }
                  );
              },
              [e, t]
            ),
            Object(n.useEffect)(
              function () {
                if (e)
                  return (
                    e.on('replyComment', function (e) {
                      t({ type: N.e, payload: e });
                    }),
                    function () {
                      e.off('replyComment');
                    }
                  );
              },
              [e, t]
            ),
            Object(n.useEffect)(
              function () {
                if (e)
                  return (
                    e.on('updateComment', function (e) {
                      t({ type: e.comment_root ? N.g : N.f, payload: e });
                    }),
                    function () {
                      e.off('updateComment');
                    }
                  );
              },
              [e, t]
            ),
            Object(n.useEffect)(
              function () {
                if (e)
                  return (
                    e.on('deleteComment', function (e) {
                      t({ type: e.comment_root ? N.c : N.b, payload: e });
                    }),
                    function () {
                      e.off('deleteComment');
                    }
                  );
              },
              [e, t]
            ),
            Object(b.jsx)('div', {})
          );
        },
        C = a(44),
        E =
          (a(233),
          function () {
            var e = Object(n.useState)(!1),
              t = Object(o.a)(e, 2),
              a = (t[0], t[1]);
            Object(n.useEffect)(function () {
              window.addEventListener('beforeinstallprompt', function (e) {
                e.preventDefault(), e, a(!0);
              }),
                window.addEventListener('appinstalled', function () {
                  console.log('INSTALL: Success');
                });
            }, []),
              window.addEventListener('appinstalled', function (e) {
                console.log('App Installed');
              });
            var c = Object(u.b)();
            return (
              Object(n.useEffect)(
                function () {
                  c(Object(w.c)()), c(Object(x.g)()), c(Object(_.e)());
                },
                [c]
              ),
              Object(n.useEffect)(
                function () {
                  var e = Object(k.a)(C.a);
                  return (
                    c({ type: 'SOCKET', payload: e }),
                    function () {
                      e.close();
                    }
                  );
                },
                [c]
              ),
              Object(b.jsxs)('div', {
                className: 'container',
                children: [
                  Object(b.jsx)(S, {}),
                  Object(b.jsxs)(i.a, {
                    children: [
                      Object(b.jsx)(y.a, {}),
                      Object(b.jsx)(g, {}),
                      Object(b.jsxs)(l.c, {
                        children: [
                          Object(b.jsx)(l.a, {
                            exact: !0,
                            path: '/',
                            component: j,
                          }),
                          Object(b.jsx)(l.a, {
                            exact: !0,
                            path: '/:page',
                            component: j,
                          }),
                          Object(b.jsx)(l.a, {
                            exact: !0,
                            path: '/:page/:slug',
                            component: j,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
        T = a(56),
        A = a(123),
        D = a(27),
        F = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === D.a ? t.payload : e;
        },
        L = a(3),
        R = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === L.a ? t.payload : e;
        },
        I = a(4),
        M = a(15),
        z = a(37),
        W = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case z.a:
              return [t.payload].concat(Object(M.a)(e));
            case z.c:
              return t.payload;
            case z.d:
              return e.map(function (e) {
                return e._id === t.payload._id
                  ? Object(I.a)(
                      Object(I.a)({}, e),
                      {},
                      { name: t.payload.name }
                    )
                  : e;
              });
            case z.b:
              return e.filter(function (e) {
                return e._id !== t.payload;
              });
            default:
              return e;
          }
        },
        H = a(23),
        B = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === H.e ? t.payload : e;
        },
        P = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === H.c
            ? e.every(function (e) {
                return e.id !== t.payload.id;
              })
              ? [].concat(Object(M.a)(e), [t.payload])
              : e.map(function (e) {
                  return e.id === t.payload.id ? t.payload : e;
                })
            : e;
        },
        U = a(71),
        G = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === U.a ? [].concat(Object(M.a)(e), [t.payload]) : e;
        },
        Y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case H.d:
              return e.every(function (e) {
                return e.id !== t.payload.id;
              })
                ? [].concat(Object(M.a)(e), [t.payload])
                : e.map(function (e) {
                    return e.id === t.payload.id ? t.payload : e;
                  });
            case H.a:
              return e.map(function (e) {
                return e.id === t.payload.user._id
                  ? Object(I.a)(
                      Object(I.a)({}, e),
                      {},
                      { blogs: [t.payload].concat(Object(M.a)(e.blogs)) }
                    )
                  : e;
              });
            case H.b:
              return e.map(function (e) {
                return e.id === t.payload.user._id
                  ? Object(I.a)(
                      Object(I.a)({}, e),
                      {},
                      {
                        blogs: e.blogs.filter(function (e) {
                          return e._id !== t.payload._id;
                        }),
                      }
                    )
                  : e;
              });
            default:
              return e;
          }
        },
        J = { data: [], total: 1 },
        q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : J,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case N.a:
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                { data: [t.payload].concat(Object(M.a)(e.data)) }
              );
            case N.d:
              return t.payload;
            case N.e:
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  data: e.data.map(function (e) {
                    return e._id === t.payload.comment_root
                      ? Object(I.a)(
                          Object(I.a)({}, e),
                          {},
                          {
                            replyCM: [t.payload].concat(Object(M.a)(e.replyCM)),
                          }
                        )
                      : e;
                  }),
                }
              );
            case N.f:
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  data: e.data.map(function (e) {
                    return e._id === t.payload._id ? t.payload : e;
                  }),
                }
              );
            case N.g:
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  data: e.data.map(function (e) {
                    var a;
                    return e._id === t.payload.comment_root
                      ? Object(I.a)(
                          Object(I.a)({}, e),
                          {},
                          {
                            replyCM:
                              null === (a = e.replyCM) || void 0 === a
                                ? void 0
                                : a.map(function (e) {
                                    return e._id === t.payload._id
                                      ? t.payload
                                      : e;
                                  }),
                          }
                        )
                      : e;
                  }),
                }
              );
            case N.b:
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  data: e.data.filter(function (e) {
                    return e._id !== t.payload._id;
                  }),
                }
              );
            case N.c:
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  data: e.data.map(function (e) {
                    var a;
                    return e._id === t.payload.comment_root
                      ? Object(I.a)(
                          Object(I.a)({}, e),
                          {},
                          {
                            replyCM:
                              null === (a = e.replyCM) || void 0 === a
                                ? void 0
                                : a.filter(function (e) {
                                    return e._id !== t.payload._id;
                                  }),
                          }
                        )
                      : e;
                  }),
                }
              );
            default:
              return e;
          }
        },
        K = 'SOCKET',
        V = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === K ? t.payload : e;
        },
        Z = Object(T.combineReducers)({
          auth: F,
          alert: R,
          categories: W,
          homeBlogs: B,
          blogsCategory: P,
          otherInfo: G,
          blogsUser: Y,
          comments: q,
          socket: V,
        }),
        $ = a(122),
        Q = Object(T.createStore)(
          Z,
          Object($.composeWithDevTools)(Object(T.applyMiddleware)(A.a))
        ),
        X = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function ee(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function () {
                  'installed' === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          'New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.'
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log('Content is cached for offline use.'),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error('Error during service worker registration:', e);
          });
      }
      var te = function (e) {
        e &&
          e instanceof Function &&
          a
            .e(3)
            .then(a.bind(null, 234))
            .then(function (t) {
              var a = t.getCLS,
                n = t.getFID,
                c = t.getFCP,
                r = t.getLCP,
                s = t.getTTFB;
              a(e), n(e), c(e), r(e), s(e);
            });
      };
      s.a.render(
        Object(b.jsx)(c.a.StrictMode, {
          children: Object(b.jsx)(u.a, {
            store: Q,
            children: Object(b.jsx)(E, {}),
          }),
        }),
        document.getElementById('root')
      ),
        (function (e) {
          if ('serviceWorker' in navigator) {
            if (
              new URL('', window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener('load', function () {
              var t = ''.concat('', '/service-worker.js');
              X
                ? (!(function (e, t) {
                    fetch(e, { headers: { 'Service-Worker': 'script' } })
                      .then(function (a) {
                        var n = a.headers.get('content-type');
                        404 === a.status ||
                        (null != n && -1 === n.indexOf('javascript'))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : ee(e, t);
                      })
                      .catch(function () {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA'
                    );
                  }))
                : ee(t, e);
            });
          }
        })(),
        te();
    },
    26: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return d;
      }),
        a.d(t, 'e', function () {
          return b;
        }),
        a.d(t, 'c', function () {
          return j;
        }),
        a.d(t, 'd', function () {
          return p;
        }),
        a.d(t, 'f', function () {
          return f;
        }),
        a.d(t, 'b', function () {
          return O;
        });
      var n = a(2),
        c = a(4),
        r = a(7),
        s = a(40),
        o = a(9),
        i = a(3),
        l = a(23),
        u = a(19),
        d = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              Object(n.a)().mark(function a(r) {
                var d, b, j, p, f, O;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), Object(u.a)(t, r);
                        case 2:
                          if (
                            ((d = a.sent),
                            (b = d || t),
                            (a.prev = 4),
                            r({ type: i.a, payload: { loading: !0 } }),
                            'string' === typeof e.thumbnail)
                          ) {
                            a.next = 13;
                            break;
                          }
                          return (a.next = 9), Object(s.b)(e.thumbnail);
                        case 9:
                          (p = a.sent), (j = p.url), (a.next = 14);
                          break;
                        case 13:
                          j = e.thumbnail;
                        case 14:
                          return (
                            (f = Object(c.a)(
                              Object(c.a)({}, e),
                              {},
                              { thumbnail: j }
                            )),
                            (a.next = 17),
                            Object(o.d)('blog', f, b)
                          );
                        case 17:
                          (O = a.sent),
                            r({ type: l.a, payload: O.data }),
                            r({ type: i.a, payload: { loading: !1 } }),
                            (a.next = 25);
                          break;
                        case 22:
                          (a.prev = 22),
                            (a.t0 = a.catch(4)),
                            r({
                              type: i.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 25:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[4, 22]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        b = function () {
          return (function () {
            var e = Object(r.a)(
              Object(n.a)().mark(function e(t) {
                var a;
                return Object(n.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: i.a, payload: { loading: !0 } }),
                            (e.next = 4),
                            Object(o.b)('home/blogs')
                          );
                        case 4:
                          (a = e.sent),
                            t({ type: l.e, payload: a.data }),
                            t({ type: i.a, payload: { loading: !1 } }),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            t({
                              type: i.a,
                              payload: { errors: e.t0.response.data.msg },
                            });
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        j = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              Object(n.a)().mark(function a(r) {
                var s, u;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            8,
                            (s = t || '?page='.concat(1)),
                            r({ type: i.a, payload: { loading: !0 } }),
                            (a.next = 6),
                            Object(o.b)(
                              'blogs/category/'
                                .concat(e)
                                .concat(s, '&limit=')
                                .concat(8)
                            )
                          );
                        case 6:
                          (u = a.sent),
                            r({
                              type: l.c,
                              payload: Object(c.a)(
                                Object(c.a)({}, u.data),
                                {},
                                { id: e, search: t }
                              ),
                            }),
                            r({ type: i.a, payload: { loading: !1 } }),
                            (a.next = 14);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(0)),
                            r({
                              type: i.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 14:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        p = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              Object(n.a)().mark(function a(r) {
                var s, u;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            3,
                            (s = t || '?page='.concat(1)),
                            r({ type: i.a, payload: { loading: !0 } }),
                            (a.next = 6),
                            Object(o.b)(
                              'blogs/user/'
                                .concat(e)
                                .concat(s, '&limit=')
                                .concat(3)
                            )
                          );
                        case 6:
                          (u = a.sent),
                            r({
                              type: l.d,
                              payload: Object(c.a)(
                                Object(c.a)({}, u.data),
                                {},
                                { id: e, search: t }
                              ),
                            }),
                            r({ type: i.a, payload: { loading: !1 } }),
                            (a.next = 14);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(0)),
                            r({
                              type: i.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 14:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        f = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              Object(n.a)().mark(function a(r) {
                var l, d, b, j, p, f;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), Object(u.a)(t, r);
                        case 2:
                          if (
                            ((l = a.sent),
                            (d = l || t),
                            (a.prev = 4),
                            r({ type: i.a, payload: { loading: !0 } }),
                            'string' === typeof e.thumbnail)
                          ) {
                            a.next = 13;
                            break;
                          }
                          return (a.next = 9), Object(s.b)(e.thumbnail);
                        case 9:
                          (j = a.sent), (b = j.url), (a.next = 14);
                          break;
                        case 13:
                          b = e.thumbnail;
                        case 14:
                          return (
                            (p = Object(c.a)(
                              Object(c.a)({}, e),
                              {},
                              { thumbnail: b }
                            )),
                            (a.next = 17),
                            Object(o.e)('blog/'.concat(p._id), p, d)
                          );
                        case 17:
                          (f = a.sent),
                            r({ type: i.a, payload: { success: f.data.msg } }),
                            (a.next = 24);
                          break;
                        case 21:
                          (a.prev = 21),
                            (a.t0 = a.catch(4)),
                            r({
                              type: i.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 24:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[4, 21]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        O = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              Object(n.a)().mark(function a(c) {
                var r, s;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), Object(u.a)(t, c);
                        case 2:
                          return (
                            (r = a.sent),
                            (s = r || t),
                            (a.prev = 4),
                            c({ type: l.b, payload: e }),
                            (a.next = 8),
                            Object(o.a)('blog/'.concat(e._id), s)
                          );
                        case 8:
                          a.next = 13;
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(4)),
                            c({
                              type: i.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[4, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        };
    },
    27: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      });
      var n = 'AUTH';
    },
    3: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      });
      var n = 'ALERT';
    },
    30: function (e, t, a) {
      'use strict';
      a(1);
      var n = a(0);
      t.a = function () {
        return Object(n.jsx)('div', {
          className: 'd-flex justify-content-center my-4',
          children: Object(n.jsx)('div', {
            className: 'spinner-border',
            role: 'status',
            children: Object(n.jsx)('span', {
              className: 'visually-hidden',
              children: 'Loading...',
            }),
          }),
        });
      };
    },
    37: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      }),
        a.d(t, 'c', function () {
          return c;
        }),
        a.d(t, 'd', function () {
          return r;
        }),
        a.d(t, 'b', function () {
          return s;
        });
      var n = 'CREATE_CATEGORY',
        c = 'GET_CATEGORIES',
        r = 'UPDATE_CATEGORY',
        s = 'DELETE_CATEGORY';
    },
    40: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return r;
      }),
        a.d(t, 'b', function () {
          return s;
        });
      var n = a(2),
        c = a(7),
        r = function (e) {
          var t = '';
          return e
            ? (e.size > 1048576 && (t = 'The largest image size is 1mb'),
              ['image/png', 'image/jpeg'].includes(e.type) ||
                (t = 'The image type is png / jpeg'),
              t)
            : 'File does not exist.';
        },
        s = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t) {
              var a, c, r;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = new FormData()).append('file', t),
                        a.append('upload_preset', 'sutra_next'),
                        a.append('cloud_name', 'suttra'),
                        (e.next = 6),
                        fetch('https://api.cloudinary.com/v1_1/suttra/upload', {
                          method: 'POST',
                          body: a,
                        })
                      );
                    case 6:
                      return (c = e.sent), (e.next = 9), c.json();
                    case 9:
                      return (
                        (r = e.sent),
                        e.abrupt('return', {
                          public_id: r.public_id,
                          url: r.secure_url,
                        })
                      );
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    42: function (e, t, a) {
      'use strict';
      a(1);
      var n = a(0);
      t.a = function () {
        return Object(n.jsx)('div', {
          className: 'position-relative',
          style: { minHeight: 'calc(100vh - 70px)' },
          children: Object(n.jsx)('h2', {
            className: 'position-absolute text-secondary',
            style: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
            children: '404 | NotFound',
          }),
        });
      };
    },
    44: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      });
      var n = 'https://dhama-sutra-jvbd1t6bn-tsouliyapps.vercel.app/';
    },
    45: function (e, t, a) {
      'use strict';
      a.d(t, 'd', function () {
        return n;
      }),
        a.d(t, 'a', function () {
          return c;
        }),
        a.d(t, 'c', function () {
          return r;
        }),
        a.d(t, 'b', function () {
          return s;
        });
      a(119);
      var n = function (e) {
          var t = e.name,
            a = e.account,
            n = e.password,
            s = e.cf_password,
            o = [];
          t
            ? t.length > 20 && o.push('Your name is up to 20 chars long.')
            : o.push(
                '\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e9b\u0ec9\u0ead\u0e99\u0e8a\u0eb7\u0ec8'
              ),
            a
              ? r(a) ||
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  String(a).toLowerCase()
                ) ||
                o.push('Email or phone number format is incorrect.')
              : o.push(
                  '\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e9b\u0ec9\u0ead\u0e99\u0ead\u0eb5\u0ec0\u0ea1\u0ea7'
                );
          var i = c(n, s);
          return i && o.push(i), { errMsg: o, errLength: o.length };
        },
        c = function (e, t) {
          return e.length < 6
            ? '\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e9b\u0ec9\u0ead\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99\u0ec3\u0eab\u0ec9\u0ec0\u0e81\u0eb5\u0e99\u0e81\u0ea7\u0ec8\u0eb2 6 \u0ec2\u0e95'
            : e !== t
            ? '\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99\u0ec3\u0eab\u0ec9\u0e95\u0ebb\u0e87\u0e81\u0eb1\u0e99'
            : void 0;
        };
      function r(e) {
        return /^[+]/g.test(e);
      }
      var s = function (e, t) {
        var a = Object.keys(e),
          n = Object.keys(t);
        if (a.length !== n.length) return !1;
        for (var c = 0, r = a; c < r.length; c++) {
          var s = r[c];
          if (e[s] !== t[s]) return !1;
        }
        return !0;
      };
    },
    46: function (e, t, a) {
      'use strict';
      a.d(t, 'c', function () {
        return j;
      }),
        a.d(t, 'b', function () {
          return p;
        }),
        a.d(t, 'a', function () {
          return f;
        });
      var n = a(2),
        c = a(4),
        r = a(7),
        s = a(27),
        o = a(3),
        i = a(40),
        l = a(9),
        u = a(45),
        d = a(71),
        b = a(19),
        j = function (e, t, a) {
          return (function () {
            var u = Object(r.a)(
              Object(n.a)().mark(function r(u) {
                var d, j, p, f, O, m;
                return Object(n.a)().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (a.access_token && a.user) {
                            n.next = 2;
                            break;
                          }
                          return n.abrupt('return');
                        case 2:
                          return (n.next = 4), Object(b.a)(a.access_token, u);
                        case 4:
                          if (
                            ((d = n.sent),
                            (j = d || a.access_token),
                            (p = ''),
                            (n.prev = 7),
                            u({ type: o.a, payload: { loading: !0 } }),
                            !e)
                          ) {
                            n.next = 17;
                            break;
                          }
                          if (!(f = Object(i.a)(e))) {
                            n.next = 13;
                            break;
                          }
                          return n.abrupt(
                            'return',
                            u({ type: o.a, payload: { errors: f } })
                          );
                        case 13:
                          return (n.next = 15), Object(i.b)(e);
                        case 15:
                          (O = n.sent), (p = O.url);
                        case 17:
                          return (
                            u({
                              type: s.a,
                              payload: {
                                access_token: a.access_token,
                                user: Object(c.a)(
                                  Object(c.a)({}, a.user),
                                  {},
                                  {
                                    avatar: p || a.user.avatar,
                                    name: t || a.user.name,
                                  }
                                ),
                              },
                            }),
                            (n.next = 20),
                            Object(l.c)(
                              'user',
                              {
                                avatar: p || a.user.avatar,
                                name: t || a.user.name,
                              },
                              j
                            )
                          );
                        case 20:
                          (m = n.sent),
                            u({ type: o.a, payload: { success: m.data.msg } }),
                            (n.next = 27);
                          break;
                        case 24:
                          (n.prev = 24),
                            (n.t0 = n.catch(7)),
                            u({
                              type: o.a,
                              payload: { errors: n.t0.response.data.msg },
                            });
                        case 27:
                        case 'end':
                          return n.stop();
                      }
                  },
                  r,
                  null,
                  [[7, 24]]
                );
              })
            );
            return function (e) {
              return u.apply(this, arguments);
            };
          })();
        },
        p = function (e, t, a) {
          return (function () {
            var c = Object(r.a)(
              Object(n.a)().mark(function c(r) {
                var s, i, d, j;
                return Object(n.a)().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), Object(b.a)(a, r);
                        case 2:
                          if (
                            ((s = n.sent),
                            (i = s || a),
                            !(d = Object(u.a)(e, t)))
                          ) {
                            n.next = 7;
                            break;
                          }
                          return n.abrupt(
                            'return',
                            r({ type: o.a, payload: { errors: d } })
                          );
                        case 7:
                          return (
                            (n.prev = 7),
                            r({ type: o.a, payload: { loading: !0 } }),
                            (n.next = 11),
                            Object(l.c)('reset_password', { password: e }, i)
                          );
                        case 11:
                          (j = n.sent),
                            r({ type: o.a, payload: { success: j.data.msg } }),
                            (n.next = 18);
                          break;
                        case 15:
                          (n.prev = 15),
                            (n.t0 = n.catch(7)),
                            r({
                              type: o.a,
                              payload: { errors: n.t0.response.data.msg },
                            });
                        case 18:
                        case 'end':
                          return n.stop();
                      }
                  },
                  c,
                  null,
                  [[7, 15]]
                );
              })
            );
            return function (e) {
              return c.apply(this, arguments);
            };
          })();
        },
        f = function (e) {
          return (function () {
            var t = Object(r.a)(
              Object(n.a)().mark(function t(a) {
                var c;
                return Object(n.a)().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a({ type: o.a, payload: { loading: !0 } }),
                            (t.next = 4),
                            Object(l.b)('user/'.concat(e))
                          );
                        case 4:
                          (c = t.sent),
                            a({ type: d.a, payload: c.data }),
                            a({ type: o.a, payload: {} }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            a({
                              type: o.a,
                              payload: { errors: t.t0.response.data.msg },
                            });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
    },
    47: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return i;
      }),
        a.d(t, 'b', function () {
          return l;
        }),
        a.d(t, 'c', function () {
          return u;
        });
      var n = a(5),
        c = (a(1), a(0)),
        r = function () {
          return Object(c.jsx)('div', {
            className: 'position-fixed w-100 h-100 text-center loading',
            style: {
              background: '#0007',
              color: 'white',
              top: 0,
              left: 0,
              zIndex: 99,
            },
            children: Object(c.jsxs)('svg', {
              width: '205',
              height: '250',
              viewBox: '0 0 40 50',
              children: [
                Object(c.jsx)('polygon', {
                  stroke: '#fff',
                  strokeWidth: '1',
                  fill: 'none',
                  points: '20,1 40,40 1,40',
                }),
                Object(c.jsx)('text', {
                  fill: '#fff',
                  x: '5',
                  y: '47',
                  children: 'Loading',
                }),
              ],
            }),
          });
        },
        s = a(3),
        o = function (e) {
          var t = e.title,
            a = e.body,
            r = e.bgColor,
            o = Object(n.b)();
          return Object(c.jsxs)('div', {
            className: 'toast show position-fixed text-light '.concat(r),
            style: { top: '5px', right: '5px', zIndex: 50, minWidth: '200px' },
            children: [
              Object(c.jsxs)('div', {
                className: 'toast-header text-light '.concat(r),
                children: [
                  Object(c.jsx)('strong', {
                    className: 'me-auto',
                    children: t,
                  }),
                  Object(c.jsx)('button', {
                    type: 'button',
                    className: 'btn-close',
                    'data-bs-dismiss': 'toast',
                    'aria-label': 'Close',
                    onClick: function () {
                      o({ type: s.a, payload: {} });
                    },
                  }),
                ],
              }),
              Object(c.jsx)('div', {
                className: 'toast-body',
                children:
                  'string' === typeof a
                    ? a
                    : Object(c.jsx)('ul', {
                        children: a.map(function (e, t) {
                          return Object(c.jsx)('li', { children: e }, t);
                        }),
                      }),
              }),
            ],
          });
        },
        i = function () {
          var e = Object(n.c)(function (e) {
            return e;
          }).alert;
          return Object(c.jsxs)('div', {
            children: [
              e.loading && Object(c.jsx)(r, {}),
              e.errors &&
                Object(c.jsx)(o, {
                  title: 'Errors',
                  body: e.errors,
                  bgColor: 'bg-danger',
                }),
              e.success &&
                Object(c.jsx)(o, {
                  title: 'Success',
                  body: e.success,
                  bgColor: 'bg-success',
                }),
            ],
          });
        },
        l = function (e) {
          return Object(c.jsx)('div', { className: 'errMsg', children: e });
        },
        u = function (e) {
          return Object(c.jsx)('div', { className: 'successMsg', children: e });
        };
    },
    53: function (e, t, a) {
      'use strict';
      var n = a(15),
        c = a(6),
        r = a(1),
        s = a(12),
        o = a(0);
      t.a = function (e) {
        var t = e.total,
          a = e.callback,
          i = Object(r.useState)(1),
          l = Object(c.a)(i, 2),
          u = l[0],
          d = l[1],
          b = Object(n.a)(Array(t)).map(function (e, t) {
            return t + 1;
          }),
          j = Object(s.f)(),
          p = function (e) {
            j.push('?page='.concat(e)), a(e);
          };
        return (
          Object(r.useEffect)(
            function () {
              var e = j.location.search.slice(6) || 1;
              d(Number(e));
            },
            [j.location.search]
          ),
          Object(o.jsx)('nav', {
            'aria-label': 'Page navigation example',
            style: { cursor: 'pointer' },
            children: Object(o.jsxs)('ul', {
              className: 'pagination',
              children: [
                u > 1 &&
                  Object(o.jsx)('li', {
                    className: 'page-item',
                    onClick: function () {
                      return p(u - 1);
                    },
                    children: Object(o.jsx)('span', {
                      className: 'page-link',
                      'aria-label': 'Previous',
                      children: Object(o.jsx)('span', {
                        'aria-hidden': 'true',
                        children: '\xab',
                      }),
                    }),
                  }),
                b.map(function (e) {
                  return Object(o.jsx)(
                    'li',
                    {
                      className: 'page-item '.concat(
                        ((t = e), t === u ? 'active' : '')
                      ),
                      onClick: function () {
                        return p(e);
                      },
                      children: Object(o.jsx)('span', {
                        className: 'page-link',
                        children: e,
                      }),
                    },
                    e
                  );
                  var t;
                }),
                u < t &&
                  Object(o.jsx)('li', {
                    className: 'page-item',
                    onClick: function () {
                      return p(u + 1);
                    },
                    children: Object(o.jsx)('span', {
                      className: 'page-link',
                      'aria-label': 'Next',
                      children: Object(o.jsx)('span', {
                        'aria-hidden': 'true',
                        children: '\xbb',
                      }),
                    }),
                  }),
              ],
            }),
          })
        );
      };
    },
    54: function (e, t, a) {
      'use strict';
      a(1);
      var n = a(12),
        c = a(8),
        r = a(5),
        s = a(26),
        o = (a(230), a(0));
      t.a = function (e) {
        var t = e.blog,
          a = Object(n.h)().slug,
          i = Object(r.c)(function (e) {
            return e;
          }).auth,
          l = Object(r.b)();
        return Object(o.jsx)(o.Fragment, {
          children: Object(o.jsx)(c.b, {
            to: '/blog/'.concat(t._id),
            children: Object(o.jsx)('div', {
              className: 'card mb-1',
              style: { minWidth: 'auto', borderRadius: '12px' },
              children: Object(o.jsxs)('div', {
                className: 'row g-0 p-2',
                children: [
                  Object(o.jsx)('div', {
                    className: 'col-md-4',
                    style: {
                      minHeight: '150px',
                      maxHeight: '170px',
                      overflow: 'hidden',
                    },
                    children:
                      t.thumbnail &&
                      Object(o.jsx)(o.Fragment, {
                        children:
                          'string' === typeof t.thumbnail
                            ? Object(o.jsx)(c.b, {
                                to: '/blog/'.concat(t._id),
                                children: Object(o.jsx)('img', {
                                  src: t.thumbnail,
                                  className:
                                    'card__image w-100 h-100 rounded-full',
                                  alt: 'thumbnail',
                                  style: {
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                  },
                                }),
                              })
                            : Object(o.jsx)('img', {
                                src: URL.createObjectURL(t.thumbnail),
                                className: 'w-100 h-100',
                                alt: 'thumbnail',
                                style: { objectFit: 'cover' },
                              }),
                      }),
                  }),
                  Object(o.jsx)('div', {
                    className: 'col-md-8',
                    children: Object(o.jsxs)('div', {
                      className: 'card-body',
                      children: [
                        Object(o.jsx)('h5', {
                          className: 'card-title ',
                          children: Object(o.jsx)(c.b, {
                            to: '/blog/'.concat(t._id),
                            className: 'text-capitalize',
                            style: {
                              color: '#A66908',
                              textDecoration: 'none',
                              textTransform: 'capitalize',
                              fontWeight: 'bold',
                            },
                            children: t.title,
                          }),
                        }),
                        Object(o.jsx)(c.b, {
                          to: '/blog/'.concat(t._id),
                          style: {
                            color: '#A66908',
                            textDecoration: 'none',
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                          },
                          children: Object(o.jsx)('h4', {
                            className: 'card-text',
                            children: t.description,
                          }),
                        }),
                        t.title &&
                          Object(o.jsxs)('div', {
                            className:
                              'card-text d-flex justify-content-between align-items-center',
                            children: [
                              i.user &&
                                a === i.user._id &&
                                Object(o.jsxs)('div', {
                                  style: { cursor: 'pointer' },
                                  children: [
                                    Object(o.jsx)(c.b, {
                                      to: '/update_blog/'.concat(t._id),
                                      children: Object(o.jsx)('i', {
                                        className: 'fas fa-edit',
                                        title: 'edit',
                                      }),
                                    }),
                                    Object(o.jsx)('i', {
                                      className:
                                        'fas fa-trash text-danger mx-3',
                                      title: 'edit',
                                      onClick: function () {
                                        if (i.user && i.access_token)
                                          return a !== i.user._id
                                            ? l({
                                                type: 'ALERT',
                                                payload: {
                                                  errors:
                                                    'Invalid Authentication.',
                                                },
                                              })
                                            : void (
                                                window.confirm(
                                                  'Do you want to delete this Suttra?'
                                                ) &&
                                                l(
                                                  Object(s.b)(t, i.access_token)
                                                )
                                              );
                                      },
                                    }),
                                  ],
                                }),
                              Object(o.jsx)('small', {
                                className: 'text-muted',
                                children: new Date(
                                  t.createdAt
                                ).toLocaleString(),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    57: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return l;
      }),
        a.d(t, 'c', function () {
          return u;
        }),
        a.d(t, 'd', function () {
          return d;
        }),
        a.d(t, 'b', function () {
          return b;
        });
      var n = a(2),
        c = a(7),
        r = a(3),
        s = a(9),
        o = a(37),
        i = a(19),
        l = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              Object(n.a)().mark(function a(c) {
                var l, u, d;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), Object(i.a)(t, c);
                        case 2:
                          return (
                            (l = a.sent),
                            (u = l || t),
                            (a.prev = 4),
                            c({ type: r.a, payload: { loading: !0 } }),
                            (a.next = 8),
                            Object(s.d)('category', { name: e }, u)
                          );
                        case 8:
                          (d = a.sent),
                            c({ type: o.a, payload: d.data.newCategory }),
                            c({ type: r.a, payload: { loading: !1 } }),
                            (a.next = 16);
                          break;
                        case 13:
                          (a.prev = 13),
                            (a.t0 = a.catch(4)),
                            c({
                              type: r.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 16:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[4, 13]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        u = function () {
          return (function () {
            var e = Object(c.a)(
              Object(n.a)().mark(function e(t) {
                var a;
                return Object(n.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: r.a, payload: { loading: !0 } }),
                            (e.next = 4),
                            Object(s.b)('category')
                          );
                        case 4:
                          (a = e.sent),
                            t({ type: o.c, payload: a.data.categories }),
                            t({ type: r.a, payload: { loading: !1 } }),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            t({
                              type: r.a,
                              payload: { errors: e.t0.response.data.msg },
                            });
                        case 12:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        d = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              Object(n.a)().mark(function a(c) {
                var l, u;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), Object(i.a)(t, c);
                        case 2:
                          return (
                            (l = a.sent),
                            (u = l || t),
                            (a.prev = 4),
                            c({ type: o.d, payload: e }),
                            (a.next = 8),
                            Object(s.c)(
                              'category/'.concat(e._id),
                              { name: e.name },
                              u
                            )
                          );
                        case 8:
                          a.next = 13;
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(4)),
                            c({
                              type: r.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[4, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        b = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              Object(n.a)().mark(function a(c) {
                var l, u;
                return Object(n.a)().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), Object(i.a)(t, c);
                        case 2:
                          return (
                            (l = a.sent),
                            (u = l || t),
                            (a.prev = 4),
                            c({ type: o.b, payload: e }),
                            (a.next = 8),
                            Object(s.a)('category/'.concat(e), u)
                          );
                        case 8:
                          a.next = 13;
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(4)),
                            c({
                              type: r.a,
                              payload: { errors: a.t0.response.data.msg },
                            });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[4, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        };
    },
    67: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(2),
        c = a(4),
        r = a(7),
        s = a(6),
        o = a(1),
        i = a(5),
        l = a(45),
        u = a(9),
        d = a(42),
        b = a(34),
        j = a(0),
        p = function (e) {
          var t = e.blog,
            a = e.setBlog,
            n = Object(i.c)(function (e) {
              return e;
            }).categories,
            r = function (e) {
              var n = e.target,
                r = n.value,
                s = n.name;
              a(Object(c.a)(Object(c.a)({}, t), {}, Object(b.a)({}, s, r)));
            };
          return Object(j.jsxs)('form', {
            children: [
              Object(j.jsxs)('div', {
                className: 'form-group position-relative',
                children: [
                  Object(j.jsx)('input', {
                    type: 'text',
                    className: 'form-control',
                    value: t.title,
                    name: 'title',
                    onChange: r,
                  }),
                  Object(j.jsx)('small', {
                    className: 'text-muted position-absolute',
                    style: { bottom: 0, right: '3px', opacity: '0.3' },
                    children: t.title.length,
                  }),
                ],
              }),
              Object(j.jsx)('div', {
                className: 'form-group my-3',
                children: Object(j.jsx)('input', {
                  type: 'file',
                  className: 'form-control',
                  accept: 'image/*',
                  onChange: function (e) {
                    var n = e.target.files;
                    if (n) {
                      var r = n[0];
                      a(Object(c.a)(Object(c.a)({}, t), {}, { thumbnail: r }));
                    }
                  },
                }),
              }),
              Object(j.jsxs)('div', {
                className: 'form-group position-relative',
                children: [
                  Object(j.jsx)('textarea', {
                    className: 'form-control',
                    rows: 4,
                    value: t.description,
                    style: { resize: 'none' },
                    name: 'description',
                    onChange: r,
                  }),
                  Object(j.jsx)('small', {
                    className: 'text-muted position-absolute',
                    style: { bottom: 0, right: '3px', opacity: '0.3' },
                    children: t.description.length,
                  }),
                ],
              }),
              Object(j.jsx)('div', {
                className: 'form-group my-3',
                children: Object(j.jsxs)('select', {
                  className: 'form-control text-capitalize',
                  value: t.category,
                  name: 'category',
                  onChange: r,
                  children: [
                    Object(j.jsx)('option', {
                      value: '',
                      children:
                        '\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0edd\u0ea7\u0e94\u0e97\u0eb1\u0ea1',
                    }),
                    n.map(function (e) {
                      return Object(j.jsx)(
                        'option',
                        { value: e._id, children: e.name },
                        e._id
                      );
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        f = a(54),
        O = a(70),
        m = a.n(O),
        h = (a(106), a(40)),
        x = a(3),
        v = [
          [{ font: [] }],
          [{ size: ['small', !1, 'large', 'huge'] }],
          [{ header: [1, 2, 3, 4, 5, 6, !1] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ align: [] }],
          ['clean', 'link', 'image', 'video'],
        ],
        g = function (e) {
          var t = e.setBody,
            a = e.body,
            c = Object(i.b)(),
            s = Object(o.useRef)(null),
            l = { toolbar: { container: v } },
            u = Object(o.useCallback)(
              function () {
                var e = document.createElement('input');
                (e.type = 'file'),
                  (e.accept = 'image/*'),
                  e.click(),
                  (e.onchange = Object(r.a)(
                    Object(n.a)().mark(function t() {
                      var a, r, o, i, l, u, d;
                      return Object(n.a)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((r = e.files)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt(
                                'return',
                                c({
                                  type: x.a,
                                  payload: { errors: 'File does not exist.' },
                                })
                              );
                            case 3:
                              if (((o = r[0]), !(i = Object(h.a)(o)))) {
                                t.next = 7;
                                break;
                              }
                              return t.abrupt(
                                'return',
                                c({ type: x.a, payload: { errors: i } })
                              );
                            case 7:
                              return (
                                c({ type: x.a, payload: { loading: !0 } }),
                                (t.next = 10),
                                Object(h.b)(o)
                              );
                            case 10:
                              (l = t.sent),
                                (u = s.current),
                                void 0 !==
                                  (d =
                                    null === u ||
                                    void 0 === u ||
                                    null ===
                                      (a = u.getEditor().getSelection()) ||
                                    void 0 === a
                                      ? void 0
                                      : a.index) &&
                                  (null === u ||
                                    void 0 === u ||
                                    u
                                      .getEditor()
                                      .insertEmbed(
                                        d,
                                        'image',
                                        ''.concat(l.url)
                                      )),
                                c({ type: x.a, payload: { loading: !1 } });
                            case 15:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  ));
              },
              [c]
            );
          return (
            Object(o.useEffect)(
              function () {
                var e = s.current;
                e && e.getEditor().getModule('toolbar').addHandler('image', u);
              },
              [u]
            ),
            Object(j.jsx)('div', {
              children: Object(j.jsx)(m.a, {
                theme: 'snow',
                modules: l,
                placeholder: 'Write somethings...',
                onChange: function (e) {
                  return t(e);
                },
                value: a,
                ref: s,
              }),
            })
          );
        },
        y = a(26);
      t.default = function (e) {
        var t = e.id,
          a = {
            user: '',
            title: '',
            content: '',
            description: '',
            thumbnail: '',
            category: '',
            createdAt: new Date().toISOString(),
          },
          b = Object(o.useState)(a),
          O = Object(s.a)(b, 2),
          m = O[0],
          h = O[1],
          v = Object(o.useState)(''),
          w = Object(s.a)(v, 2),
          _ = w[0],
          k = w[1],
          N = Object(o.useRef)(null),
          S = Object(o.useState)(''),
          C = Object(s.a)(S, 2),
          E = C[0],
          T = C[1],
          A = Object(i.c)(function (e) {
            return e;
          }).auth,
          D = Object(i.b)(),
          F = Object(o.useState)(a),
          L = Object(s.a)(F, 2),
          R = L[0],
          I = L[1];
        Object(o.useEffect)(
          function () {
            if (t) {
              Object(u.b)('blog/'.concat(t))
                .then(function (e) {
                  h(e.data), k(e.data.content), I(e.data);
                })
                .catch(function (e) {
                  return console.log(e);
                });
              var e = {
                user: '',
                title: '',
                content: '',
                description: '',
                thumbnail: '',
                category: '',
                createdAt: new Date().toISOString(),
              };
              return function () {
                h(e), k(''), I(e);
              };
            }
          },
          [t]
        ),
          Object(o.useEffect)(
            function () {
              var e = N.current;
              if (e) {
                var t = null === e || void 0 === e ? void 0 : e.innerText;
                T(t);
              }
            },
            [_]
          );
        var M = (function () {
          var e = Object(r.a)(
            Object(n.a)().mark(function e() {
              var a, r;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (A.access_token) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return');
                    case 2:
                      if (
                        ((a = Object(c.a)(
                          Object(c.a)({}, m),
                          {},
                          { content: _ }
                        )),
                        !t)
                      ) {
                        e.next = 12;
                        break;
                      }
                      if (
                        m.user._id ===
                        (null === (r = A.user) || void 0 === r ? void 0 : r._id)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        D({
                          type: x.a,
                          payload: { errors: 'Invalid Authentication.' },
                        })
                      );
                    case 6:
                      if (!Object(l.b)(R, a)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        'return',
                        D({
                          type: x.a,
                          payload: { errors: 'The data does not change.' },
                        })
                      );
                    case 9:
                      D(Object(y.f)(a, A.access_token)), (e.next = 13);
                      break;
                    case 12:
                      D(Object(y.a)(a, A.access_token));
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return A.access_token
          ? Object(j.jsxs)('div', {
              className: 'my-4 create_blog',
              style: { backgroundColor: '#FEF7EC' },
              children: [
                Object(j.jsxs)('div', {
                  className: 'row mt-4',
                  children: [
                    Object(j.jsxs)('div', {
                      className: 'col-md-6',
                      children: [
                        Object(j.jsx)('h5', {
                          children:
                            '\u0e8a\u0eb7\u0ec8\u0e9e\u0ea3\u0eb0\u0eaa\u0eb9\u0e94',
                        }),
                        Object(j.jsx)(p, { blog: m, setBlog: h }),
                      ],
                    }),
                    Object(j.jsxs)('div', {
                      className: 'col-md-6',
                      children: [
                        Object(j.jsx)('h5', { children: 'Preview' }),
                        Object(j.jsx)(f.a, { blog: m }),
                      ],
                    }),
                  ],
                }),
                Object(j.jsx)(g, { setBody: k, body: _ }),
                Object(j.jsx)('div', {
                  ref: N,
                  dangerouslySetInnerHTML: { __html: _ },
                  style: { objectFit: 'cover', fontSize: '40px' },
                }),
                Object(j.jsx)('small', { children: E.length }),
                Object(j.jsx)('button', {
                  className: 'btn btn-warning mt-3 d-block mx-auto text-white',
                  onClick: M,
                  style: { backgroundColor: '#A0522D' },
                  children: t
                    ? '\u0ec0\u0ec0\u0e81\u0ec9\u0ec4\u0e82\u0e9e\u0ea3\u0eb0\u0eaa\u0eb9\u0e94'
                    : '\u0ec0\u0e9e\u0eb5\u0ec9\u0ea1\u0e9e\u0ea3\u0eb0\u0eaa\u0eb9\u0e94',
                }),
              ],
            })
          : Object(j.jsx)(d.a, {});
      };
    },
    68: function (e, t, a) {
      'use strict';
      a(1);
      var n = a(8),
        c = (a(134), a(0));
      t.a = function (e) {
        var t = e.blog;
        return Object(c.jsx)(c.Fragment, {
          children: Object(c.jsxs)('div', {
            className: 'card-main mb-1',
            style: { backgroundColor: '#FEF7EC', borderRadius: '12px' },
            children: [
              'string' === typeof t.thumbnail &&
                Object(c.jsx)(n.b, {
                  to: '/blog/'.concat(t._id),
                  style: {
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                  },
                  children: Object(c.jsx)('div', {
                    className: 'flex-shrink-0',
                    children: Object(c.jsx)('img', {
                      src: t.thumbnail,
                      className:
                        'left card-img-top w-24 h-24 rounded-full shadow-lg',
                      alt: '...',
                      style: {
                        maxHeight: '110px',
                        maxWidth: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      },
                    }),
                  }),
                }),
              Object(c.jsxs)('div', {
                className: 'card-body',
                children: [
                  Object(c.jsx)('h5', {
                    className: 'card-title',
                    style: {
                      fontSize: '20px',
                      color: '#442B03',
                      fontWeight: 'bold',
                      fontFamily: 'Poppins',
                    },
                    children: Object(c.jsx)(n.b, {
                      to: '/blog/'.concat(t._id),
                      style: {
                        textDecoration: 'none',
                        textTransform: 'capitalize',
                        color: '#A66908',
                        fontWeight: 'bold',
                      },
                      children: Object(c.jsx)('div', {
                        className: 'card__title',
                        children: t.title.slice(0, 50) + '...',
                      }),
                    }),
                  }),
                  Object(c.jsxs)('p', {
                    className: 'card-text d-flex justify-content-between',
                    children: [
                      Object(c.jsx)('small', {
                        className: 'text-muted text-capitalize',
                        children:
                          'string' !== typeof t.user &&
                          Object(c.jsxs)(n.b, {
                            to: '/profile/'.concat(t.user._id),
                            style: {
                              textDecoration: 'none',
                              textTransform: 'capitalize',
                              color: '#A66908',
                              fontWeight: 'bold',
                            },
                            children: ['\u0ec2\u0e94\u0e8d: ', t.user.name],
                          }),
                      }),
                      Object(c.jsx)('small', {
                        className:
                          ' font-normal text-gray-700 dark:text-gray-400',
                        children: new Date(t.createdAt).toLocaleString(),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    71: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return n;
      });
      var n = 'GET_OTHER_INFO';
    },
    77: function (e, t, a) {
      'use strict';
      a.r(t);
      a(1);
      var n = a(5),
        c = a(8),
        r = a(68),
        s = a(30),
        o = a(0);
      t.default = function () {
        var e = Object(n.c)(function (e) {
          return e;
        }).homeBlogs;
        return 0 === e.length
          ? Object(o.jsx)(s.a, {})
          : Object(o.jsx)('div', {
              className: 'home_page',
              children: e.map(function (e) {
                return Object(o.jsxs)(
                  'div',
                  {
                    children: [
                      e.count > 0 &&
                        Object(o.jsxs)(o.Fragment, {
                          children: [
                            Object(o.jsx)('h3', {
                              children: Object(o.jsxs)(c.b, {
                                to: '/blogs/'.concat(e.name.toLowerCase()),
                                children: [
                                  e.name,
                                  ' ',
                                  Object(o.jsxs)('small', {
                                    children: ['(', e.count, ')'],
                                  }),
                                ],
                              }),
                            }),
                            Object(o.jsx)('hr', { className: 'mt-1' }),
                            Object(o.jsx)('div', {
                              className: 'home_blogs',
                              children: e.blogs.map(function (e) {
                                return Object(o.jsx)(r.a, { blog: e }, e._id);
                              }),
                            }),
                          ],
                        }),
                      e.count > 4 &&
                        Object(o.jsx)(c.b, {
                          className:
                            'text-end d-block mt-2 mb-3  text-decoration-none',
                          to: '/blogs/'.concat(e.name),
                          style: {
                            textDecoration: 'none',
                            textTransform: 'capitalize',
                            color: '#A66908',
                            fontWeight: 'bold',
                          },
                          children:
                            '\u0ead\u0ec8\u0eb2\u0e99\u0ec0\u0e9e\u0eb5\u0ec9\u0ea1\u0e95\u0eb7\u0ea1 >>',
                        }),
                    ],
                  },
                  e._id
                );
              }),
            });
      };
    },
    85: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(6),
        c = a(1),
        r = a(12),
        s = a(9),
        o = a(47),
        i = a(0);
      t.default = function () {
        var e = Object(r.h)().slug,
          t = Object(c.useState)(''),
          a = Object(n.a)(t, 2),
          l = a[0],
          u = a[1],
          d = Object(c.useState)(''),
          b = Object(n.a)(d, 2),
          j = b[0],
          p = b[1];
        return (
          Object(c.useEffect)(
            function () {
              e &&
                Object(s.d)('active', { active_token: e })
                  .then(function (e) {
                    return p(e.data.msg);
                  })
                  .catch(function (e) {
                    return u(e.response.data.msg);
                  });
            },
            [e]
          ),
          Object(i.jsxs)('div', {
            children: [l && Object(o.b)(l), j && Object(o.c)(j)],
          })
        );
      };
    },
    9: function (e, t, a) {
      'use strict';
      a.d(t, 'd', function () {
        return i;
      }),
        a.d(t, 'b', function () {
          return l;
        }),
        a.d(t, 'c', function () {
          return u;
        }),
        a.d(t, 'e', function () {
          return d;
        }),
        a.d(t, 'a', function () {
          return b;
        });
      var n = a(2),
        c = a(7),
        r = a(48),
        s = a.n(r),
        o = a(44);
      s.a.defaults.withCredentials = !0;
      var i = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a, c) {
              var r;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.post(''.concat(o.a, '/api/').concat(t), a, {
                          headers: { Authorization: c },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt('return', r);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a) {
              var c;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.get(''.concat(o.a, '/api/').concat(t), {
                          headers: { Authorization: a },
                        })
                      );
                    case 2:
                      return (c = e.sent), e.abrupt('return', c);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a, c) {
              var r;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.patch(''.concat(o.a, '/api/').concat(t), a, {
                          headers: { Authorization: c },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt('return', r);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        d = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a, c) {
              var r;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.put(''.concat(o.a, '/api/').concat(t), a, {
                          headers: { Authorization: c },
                        })
                      );
                    case 2:
                      return (r = e.sent), e.abrupt('return', r);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = Object(c.a)(
            Object(n.a)().mark(function e(t, a) {
              var c;
              return Object(n.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.delete(''.concat(o.a, '/api/').concat(t), {
                          headers: { Authorization: a },
                        })
                      );
                    case 2:
                      return (c = e.sent), e.abrupt('return', c);
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })();
    },
  },
  [[232, 1, 2]],
]);
//# sourceMappingURL=main.b163ce98.chunk.js.map
