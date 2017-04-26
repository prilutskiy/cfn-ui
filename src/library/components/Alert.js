/* global $ */
class Alert {
  static _defaultConfig = {
    onClose: null,
    title: '',
    text: '',
    onClose: null,
    actions: []
  }

  static _createClickHander($alert, action) {
    return () => {
      const $overlay = $alert.parents('.overlay');
      $alert.removeClass('alert-opened');
      $overlay.removeClass('overlay-opened');
      setTimeout(() => {
        $overlay.remove();
        action ? action() : null;
      }, 150)
    }
  }

  static _createAlert(config) {
    const alertTemplate = `
      <div class="alert alert-default">
        <i class="fa fa-times" role="close" />
        <div class="alert-content">
          <div class="alert-content-title">${config.title}</div>
          <div class="alert-content-description">${config.text}</div>
        </div>
        <div class="alert-actions">
        </div>
      </div>
    `;
    const $alert = $(alertTemplate);
    $alert.find('[role="close"]').on('click', this._createClickHander($alert, config.onClose));

    const actions = (config.actions || []).map(a => {
      const template = `<div class="alert-action alert-action-${a.style || 'default'}">${a.text}</div>`;
      const $action = $(template).on('click', this._createClickHander($alert, a.onClick));
      return $action;
    });

    const $actionsBlock = $alert.find('.alert-actions');
    actions.forEach(a => {
      $actionsBlock.append(a);
    });
    return $alert;
  }

  static _insertIntoDOM($alert) {
    $('.app > .app-content').append($alert);
    $alert.wrap('<div class="overlay overlay-page overlay-default"></div>');
    setTimeout(() => {
      $alert.parents('.overlay').addClass('overlay-opened');
      $alert.addClass('alert-opened');
    }, 50);
  }

  static show(config) {
    const alert = this._createAlert(config);
    this._insertIntoDOM(alert);
  }
}

export default Alert;